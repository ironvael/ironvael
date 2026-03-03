"use server";

import { Resend } from "resend";
import { z } from "zod";

export type DiagnosticActionState = {
  ok: boolean;
  fieldErrors?: Record<string, string>;
  formError?: string | null;
};

const diagnosticSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .email("Please enter a valid work email")
    .transform((v) => v.trim().toLowerCase()),
  company: z.string().min(1, "Company is required"),
  role: z.string().optional(),
  teamSize: z.enum(["1-5", "6-15", "16-50", "51-200", "200+"], {
    required_error: "Please select your team size",
  }),
  revenueRange: z.enum(
    ["Pre-revenue", "<$500k", "$500k–$2M", "$2M–$10M", "$10M+"],
    {
      required_error: "Please select your revenue range",
    }
  ),
  problem: z
    .string()
    .min(10, "Please describe what feels unstable right now"),
  consent: z
    .string()
    .optional()
    .transform((v) => v === "on"),
  termsAccepted: z.literal("on", {
    errorMap: () => ({
      message: "You must agree to the Terms of Use and Privacy Policy",
    }),
  }),
  website: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  gclid: z.string().optional(),
  fbclid: z.string().optional(),
  referrer: z.string().optional(),
  pagePath: z.string().optional(),
  userAgent: z.string().optional(),
});

const apiKey =
  process.env.RESEND_API_KEY ?? process.env.RESEND_CONTACTS_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const notifyEmail =
  process.env.DIAGNOSTIC_NOTIFY_EMAIL ??
  process.env.CONTACT_EMAIL_TO ??
  "inquiries@ironvael.com";

const fromEmail =
  process.env.EMAIL_FROM ?? "Ironvael Contact <onboarding@resend.dev>";

export async function submitDiagnostic(
  _prevState: DiagnosticActionState,
  formData: FormData
): Promise<DiagnosticActionState> {
  // Honeypot
  const website = (formData.get("website") ?? "").toString().trim();
  if (website) {
    // Treat as success but do nothing for bots
    return {
      ok: true,
    };
  }

  const raw = {
    fullName: (formData.get("fullName") ?? "").toString().trim(),
    email: (formData.get("email") ?? "").toString().trim(),
    company: (formData.get("company") ?? "").toString().trim(),
    role: (formData.get("role") ?? "").toString().trim() || undefined,
    teamSize: (formData.get("teamSize") ?? "").toString(),
    revenueRange: (formData.get("revenueRange") ?? "").toString(),
    problem: (formData.get("problem") ?? "").toString().trim(),
    consent: (formData.get("consent") ?? undefined) as string | undefined,
    termsAccepted: (formData.get("termsAccepted") ?? "") as string,
    website,
    utm_source: (formData.get("utm_source") ?? "").toString() || undefined,
    utm_medium: (formData.get("utm_medium") ?? "").toString() || undefined,
    utm_campaign: (formData.get("utm_campaign") ?? "").toString() || undefined,
    utm_content: (formData.get("utm_content") ?? "").toString() || undefined,
    utm_term: (formData.get("utm_term") ?? "").toString() || undefined,
    gclid: (formData.get("gclid") ?? "").toString() || undefined,
    fbclid: (formData.get("fbclid") ?? "").toString() || undefined,
    referrer: (formData.get("referrer") ?? "").toString() || undefined,
    pagePath: (formData.get("pagePath") ?? "").toString() || undefined,
    userAgent: (formData.get("userAgent") ?? "").toString() || undefined,
  };

  let parsed;
  try {
    parsed = diagnosticSchema.parse(raw);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of err.issues) {
        const path = issue.path[0];
        if (typeof path === "string" && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      return {
        ok: false,
        fieldErrors,
        formError: "Please correct the highlighted fields.",
      };
    }
    console.error("Unexpected diagnostic error:", err);
    return {
      ok: false,
      formError: "Something went wrong. Please try again.",
    };
  }

  const submissionId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const timestamp = new Date().toISOString();

  // Send internal notification when configured
  if (resend && notifyEmail) {
    const utmLines = [
      `utm_source: ${parsed.utm_source ?? "-"}`,
      `utm_medium: ${parsed.utm_medium ?? "-"}`,
      `utm_campaign: ${parsed.utm_campaign ?? "-"}`,
      `utm_content: ${parsed.utm_content ?? "-"}`,
      `utm_term: ${parsed.utm_term ?? "-"}`,
      `gclid: ${parsed.gclid ?? "-"}`,
      `fbclid: ${parsed.fbclid ?? "-"}`,
      `referrer: ${parsed.referrer ?? "-"}`,
      `pagePath: ${parsed.pagePath ?? "-"}`,
      `userAgent: ${parsed.userAgent ?? "-"}`,
      `submissionId: ${submissionId}`,
      `timestamp: ${timestamp}`,
    ].join("\n");

    const html = [
      `<p><strong>Name:</strong> ${escapeHtml(parsed.fullName)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(parsed.email)}</p>`,
      `<p><strong>Company:</strong> ${escapeHtml(parsed.company)}</p>`,
      parsed.role
        ? `<p><strong>Role:</strong> ${escapeHtml(parsed.role)}</p>`
        : "",
      `<p><strong>Team size:</strong> ${escapeHtml(parsed.teamSize)}</p>`,
      `<p><strong>Revenue range:</strong> ${escapeHtml(
        parsed.revenueRange
      )}</p>`,
      `<p><strong>Problem:</strong></p><p>${escapeHtml(parsed.problem).replace(
        /\n/g,
        "<br>"
      )}</p>`,
      `<hr />`,
      `<p><strong>Tracking / context:</strong></p>`,
      `<pre style="font-size: 12px; background:#f5f5f5; padding:12px; white-space:pre-wrap;">${escapeHtml(
        utmLines
      )}</pre>`,
    ].join("");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [notifyEmail],
      subject: `New Diagnostic Request — ${parsed.company} (${parsed.fullName})`,
      html,
    });

    if (error) {
      console.error("Resend diagnostic internal error:", error);
      return {
        ok: false,
        formError: "We couldn't send your request. Please try again shortly.",
      };
    }
  }

  // Auto-reply to user (only if consent was given)
  if (resend && parsed.email && parsed.consent) {
    try {
      const calLink =
        process.env.NEXT_PUBLIC_CAL_DIAGNOSTIC_URL ??
        process.env.NEXT_PUBLIC_CAL_URL;

      const autoReplyHtml = [
        `<p>Hi ${escapeHtml(
          parsed.fullName
        )},</p><p>We’ve received your request for a 15-minute operational stability diagnostic.</p>`,
        calLink
          ? `<p>You can select a time that works for you here: <a href="${escapeHtml(
              calLink
            )}" target="_blank" rel="noreferrer">${escapeHtml(
              calLink
            )}</a>.</p>`
          : "",
        `<p>If you don’t see a time that works, you can reply directly to this email and we’ll coordinate a slot.</p>`,
        `<p>— Ironvael Advisory</p>`,
      ].join("");

      await resend.emails.send({
        from: fromEmail,
        to: [parsed.email],
        subject: "We received your diagnostic request",
        html: autoReplyHtml,
      });
    } catch (error) {
      console.error("Resend diagnostic auto-reply error:", error);
      // Do not fail the whole request for auto-reply issues
    }
  }

  return {
    ok: true,
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

