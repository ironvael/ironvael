import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Ironvael",
  description:
    "Terms and conditions for using the Ironvael website and requesting a diagnostic.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Legal"
            title="Terms of Use"
            description="Terms governing your use of the Ironvael website and services."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10 text-muted-foreground">

            <p className="text-base leading-relaxed">
              These Terms of Use (“Terms”) govern your access to and use of the
              Ironvael website and related services (collectively, the “Site”).
              By accessing or using the Site, requesting a diagnostic, or
              communicating with Ironvael, you agree to these Terms. If you do
              not agree, you should not use the Site.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Eligibility
              </h2>
              <p>
                You represent that you are at least 18 years old and have the
                authority to enter into these Terms on behalf of yourself or the
                organization you represent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Use of the Site
              </h2>

              <p className="mb-3">
                You may use this Site only for lawful purposes. You agree not to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>attempt to gain unauthorized access to any system or account</li>
                <li>introduce malware, harmful code, or security exploits</li>
                <li>interfere with the operation or availability of the Site</li>
                <li>use automated scraping or excessive automated requests</li>
                <li>use the Site in violation of applicable law</li>
              </ul>

              <p className="mt-3">
                We reserve the right to suspend or terminate access to the Site
                at our discretion if we believe these Terms have been violated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Diagnostics and introductory calls
              </h2>

              <p>
                If you request or participate in a diagnostic call with Ironvael
                (a “Diagnostic”), you acknowledge that the Diagnostic is an
                exploratory conversation intended to evaluate fit and potential
                scope for future services.
              </p>

              <p className="mt-3">
                Diagnostics do not create an advisory, consulting, legal,
                financial, or fiduciary relationship. No professional engagement
                exists unless and until a separate written agreement is executed
                between the parties.
              </p>

              <p className="mt-3">
                We may take notes or summaries from Diagnostic conversations for
                internal evaluation, record-keeping, and follow-up.
              </p>

              <p className="mt-3">
                <strong>Recording.</strong> Diagnostics or other calls may be
                recorded (audio and/or video). We will provide notice when
                recording is enabled. By joining a call after notice is
                provided, you consent to recording. If you do not consent,
                notify us before the call begins so we can attempt to provide a
                non-recorded alternative.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Intellectual property
              </h2>

              <p>
                All content on the Site—including text, graphics, branding,
                logos, designs, and software—is owned by Ironvael or its
                licensors and is protected by intellectual property laws.
              </p>

              <p className="mt-3">
                You may not reproduce, distribute, modify, sell, or create
                derivative works from Site content without prior written
                permission.
              </p>

              <p className="mt-3">
                We grant you a limited, revocable, non-exclusive license to
                access and use the Site for informational and internal business
                purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                No professional advice
              </h2>

              <p>
                Information provided on the Site or during Diagnostics is for
                general informational purposes only and does not constitute
                legal, financial, tax, or other professional advice.
              </p>

              <p className="mt-3">
                You should consult qualified professionals before making
                decisions based on information obtained from the Site or
                conversations with Ironvael.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Third-party services
              </h2>

              <p>
                The Site may integrate with or link to third-party services
                including scheduling tools, email delivery providers, hosting
                providers, or analytics platforms. Ironvael is not responsible
                for the policies or practices of those services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Disclaimer of warranties
              </h2>

              <p>
                The Site is provided on an “as is” and “as available” basis.
                To the fullest extent permitted by law, Ironvael disclaims all
                warranties, express or implied, including warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Limitation of liability
              </h2>

              <p>
                To the fullest extent permitted by law, Ironvael and its
                affiliates, officers, employees, or agents shall not be liable
                for any indirect, incidental, consequential, or punitive damages
                arising from your use of or inability to use the Site.
              </p>

              <p className="mt-3">
                Ironvael’s total liability for any claim related to the Site or
                these Terms shall not exceed one hundred U.S. dollars (US $100)
                or the amount paid to Ironvael for services in the three months
                preceding the claim, whichever is greater.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Indemnification
              </h2>

              <p>
                You agree to defend, indemnify, and hold harmless Ironvael and
                its affiliates, officers, employees, and contractors from any
                claims, liabilities, damages, losses, and expenses (including
                attorneys’ fees) arising from your use of the Site, violation of
                these Terms, or infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Governing law and venue
              </h2>

              <p>
                These Terms are governed by the laws of the State of Montana,
                without regard to conflict-of-law principles.
              </p>

              <p className="mt-3">
                Any dispute arising out of or relating to these Terms or the
                Site shall be brought exclusively in the state or federal courts
                located within the State of Montana. You consent to the
                jurisdiction and venue of those courts.
              </p>

              <p className="mt-3">
                <strong>Class action waiver.</strong> To the fullest extent
                permitted by law, you agree that any dispute will be resolved on
                an individual basis and not as part of a class, collective, or
                representative action.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Changes to these Terms
              </h2>

              <p>
                We may update these Terms from time to time. Updated versions
                will be posted on this page with a revised “Last updated” date.
                Continued use of the Site after updates constitutes acceptance
                of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Contact
              </h2>

              <p>
                Questions about these Terms may be directed to:
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
          <Link href="/privacy" className="text-primary font-medium hover:underline">
            Privacy Policy
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