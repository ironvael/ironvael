import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Newsletter signups send an email to your inbox. Use either Resend key.
const apiKey = process.env.RESEND_API_KEY ?? process.env.RESEND_CONTACTS_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const toEmail =
  process.env.NEWSLETTER_NOTIFY_EMAIL ?? process.env.CONTACT_EMAIL_TO;

export async function POST(request: Request) {
  if (!resend || !toEmail) {
    return NextResponse.json(
      { message: "Newsletter signup is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { email } = bodySchema.parse(body);

    const from =
      process.env.EMAIL_FROM ?? "Ironvael Contact <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [toEmail],
      subject: `Newsletter signup: ${email}`,
      html: `<p>A new subscriber signed up for the newsletter.</p><p><strong>Email:</strong> ${email}</p>`,
    });

    if (error) {
      console.error("Resend newsletter error:", error);
      return NextResponse.json(
        { message: "Could not subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Thanks for subscribing." },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.errors[0].message },
        { status: 400 }
      );
    }
    throw err;
  }
}
