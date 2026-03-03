import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Ironvael",
  description:
    "How Ironvael collects, uses, and protects your information when you contact us, request a diagnostic, sign up for our newsletter, or communicate with us.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Legal"
            title="Privacy Policy"
            description="How we collect, use, and protect your information."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10 text-muted-foreground">

            <p className="text-base leading-relaxed">
              Ironvael Operations (“Ironvael,” “we,” “us,” or “our”) respects your privacy.
              This Privacy Policy explains how we collect, use, disclose, and protect
              information when you visit our website or interact with our services,
              including when you contact us, request a diagnostic, subscribe to
              communications, or speak with us.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Information we collect
              </h2>

              <p className="mb-3">
                We collect information in several ways: information you provide to us,
                information collected automatically through the website, and information
                provided by third-party services you choose to use.
              </p>

              <h3 className="text-lg font-serif font-bold text-foreground mt-6 mb-2">
                Information you provide directly
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Contact form.</strong> When you
                  submit a contact form we may collect your name, email address, company
                  name, and message so we can respond to your inquiry.
                </li>

                <li>
                  <strong className="text-foreground">Diagnostic request.</strong> If you
                  request an operational stability diagnostic we may collect your name,
                  email, company, role, high-level team size or revenue ranges, and
                  information you voluntarily provide about your situation.
                </li>

                <li>
                  <strong className="text-foreground">Newsletter or updates.</strong>
                  When you subscribe we collect your email address to send newsletters
                  or related updates. You may unsubscribe at any time.
                </li>

                <li>
                  <strong className="text-foreground">Communications.</strong> If you
                  contact us directly by email, phone, or scheduled meeting we may
                  retain records of those communications.
                </li>
              </ul>

              <p className="mt-3">
                Please do not submit highly sensitive information such as government
                identification numbers, payment card numbers, passwords, or medical
                information unless we specifically request it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Call recordings and meeting notes
              </h2>

              <p>
                Diagnostics or other calls with Ironvael may be recorded (audio and/or
                video) and may be transcribed or summarized for internal purposes such
                as note-taking, quality improvement, training, and record-keeping.
              </p>

              <p className="mt-3">
                We will provide notice when recording is enabled. By joining a call
                after notice is provided, you consent to recording. If you do not
                consent to recording, you should notify us before the call begins so we
                can offer a non-recorded alternative if available.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Information collected automatically
              </h2>

              <p className="mb-3">
                When you visit the website we or our service providers may collect
                certain technical information automatically, including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>browser type and version</li>
                <li>device type and operating system</li>
                <li>pages visited and time spent</li>
                <li>referring and exit pages</li>
              </ul>

              <p className="mt-3">
                This information is generally collected using cookies or similar
                technologies to help us operate the site, analyze usage, and improve
                performance.
              </p>

              <p className="mt-3">
                For more details see our <Link href="/cookies">Cookie Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                How we use information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and communication requests</li>
                <li>Review and prepare for diagnostic conversations</li>
                <li>Send newsletters or updates when you subscribe</li>
                <li>Operate, maintain, and improve the website</li>
                <li>Monitor and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Sharing of information
              </h2>

              <p className="mb-3">
                We do not sell personal information. We may share information in the
                following situations:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Service providers.</strong>
                  We use vendors that help operate the website and communications,
                  such as hosting providers, email delivery services, scheduling
                  systems, analytics tools, and secure storage providers.
                </li>

                <li>
                  <strong className="text-foreground">Legal requirements.</strong>
                  We may disclose information if required by law or to protect the
                  rights, safety, or property of Ironvael or others.
                </li>

                <li>
                  <strong className="text-foreground">Business transactions.</strong>
                  Information may transfer if Ironvael undergoes a merger,
                  acquisition, financing event, or asset sale.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Data retention
              </h2>

              <p>
                We retain information for as long as reasonably necessary to fulfill
                the purposes described in this policy, including communication,
                record-keeping, and legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Security
              </h2>

              <p>
                We implement reasonable administrative, technical, and physical
                safeguards designed to protect personal information. However,
                no method of internet transmission or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Your choices
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>You may unsubscribe from marketing emails at any time.</li>
                <li>You may request access, correction, or deletion of your data.</li>
                <li>You may control cookies through browser settings.</li>
              </ul>

              <p className="mt-3">
                Requests may be submitted using the contact information below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Children's privacy
              </h2>

              <p>
                Our services are not directed to children under 13 and we do not
                knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                International visitors
              </h2>

              <p>
                If you access this website from outside the United States your
                information may be processed in the United States or other
                jurisdictions where we or our service providers operate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Changes to this policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Updates will
                appear on this page with a revised “Last updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Contact
              </h2>

              <p>
                Questions about this Privacy Policy can be directed to:
              </p>

              <p className="mt-2">
                <a
                  href="mailto:inquiries@ironvael.com"
                  className="text-primary font-medium hover:underline"
                >
                  inquiries@ironvael.com
                </a>
                <br />
                <a
                  href="tel:+14062194294"
                  className="text-primary font-medium hover:underline"
                >
                  (406) 219-4294
                </a>
              </p>
            </div>

            <p className="text-sm text-muted-foreground pt-4 border-t border-border">
              Last updated: March 3, 2026
            </p>

          </div>
        </div>
      </section>

      <section className="py-8 border-t border-border">
        <div className="container-padding max-w-3xl flex flex-wrap gap-6 justify-center">
          <Link href="/terms" className="text-primary font-medium hover:underline">
            Terms of Use
          </Link>
          <Link href="/cookies" className="text-primary font-medium hover:underline">
            Cookie Policy
          </Link>
          <Link href="/contact" className="text-primary font-medium hover:underline">
            Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}