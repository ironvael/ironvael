import { NextResponse } from "next/server";
import { Resend } from "resend";
import { api } from "@shared/routes";
import { z } from "zod";

export const dynamic = "force-dynamic";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = api.contact.create.input.parse(body);

    // Send email via Resend when configured (primary path — we treat this as success)
    if (resend && process.env.CONTACT_EMAIL_TO) {
      const from =
        process.env.EMAIL_FROM ?? "Ironvael Contact <onboarding@resend.dev>";
      const { error } = await resend.emails.send({
        from,
        to: [process.env.CONTACT_EMAIL_TO],
        subject: `Contact form: ${input.name}${input.company ? ` (${input.company})` : ""}`,
        html: [
          `<p><strong>Name:</strong> ${escapeHtml(input.name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>`,
          input.company
            ? `<p><strong>Company:</strong> ${escapeHtml(input.company)}</p>`
            : "",
          `<p><strong>Message:</strong></p><p>${escapeHtml(input.message).replace(/\n/g, "<br>")}</p>`,
        ].join(""),
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { message: "Failed to send message. Please try again." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        },
        { status: 400 }
      );
    }
    throw err;
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
