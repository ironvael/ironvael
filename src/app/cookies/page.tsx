import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Ironvael",
  description:
    "How Ironvael uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Legal"
            title="Cookie Policy"
            description="How we use cookies and similar technologies."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10 text-muted-foreground">

            <p className="text-base leading-relaxed">
              This Cookie Policy explains how Ironvael Operations ("Ironvael,"
              "we," "us," or "our") uses cookies and similar technologies when
              you visit our website (the "Site"). It explains what these
              technologies are, why we use them, and the choices you have.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                What are cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They allow a website to recognize your device,
                remember preferences, maintain session information, and help
                improve how the site functions.
              </p>
              <p className="mt-3">
                Cookies may be stored temporarily (session cookies) or for a
                longer period (persistent cookies).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Cookies we use
              </h2>

              <p className="mb-3">
                We use only limited cookies and similar technologies necessary
                to operate and improve the Site.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Strictly necessary
                  cookies.</strong> These cookies are required for core
                  functionality such as maintaining sessions, protecting the
                  security of the site, and enabling basic features like form
                  submissions.
                </li>

                <li>
                  <strong className="text-foreground">Functional
                  cookies.</strong> These cookies allow the Site to remember
                  certain preferences or states (for example, form data during a
                  session) in order to improve usability.
                </li>
              </ul>

              <p className="mt-3">
                We do not currently use advertising cookies or third-party
                behavioral tracking cookies on this Site. We do not sell
                personal information collected via cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Similar technologies
              </h2>

              <p className="mb-3">
                In addition to cookies, we may use browser storage technologies
                such as local storage or session storage.
              </p>

              <p>
                For example, on certain pages (such as our diagnostic request
                form), we may store contextual information like referral source
                or UTM parameters associated with a link you clicked. This helps
                us understand which outreach or campaigns led you to the Site
                and helps our team prepare for conversations.
              </p>

              <p className="mt-3">
                This information is stored locally in your browser and can be
                removed at any time by clearing your browser’s site data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Third-party services
              </h2>

              <p>
                Some third-party services we use to operate the Site—such as
                hosting providers, scheduling tools, email delivery providers,
                or analytics services—may set or access cookies or similar
                technologies as part of their functionality.
              </p>

              <p className="mt-3">
                These services operate under their own privacy and cookie
                policies. Ironvael does not control how third parties use their
                technologies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Managing cookies
              </h2>

              <p>
                Most web browsers allow you to control cookies through browser
                settings. You can usually block or delete cookies through your
                browser’s privacy settings.
              </p>

              <p className="mt-3">
                Please note that disabling certain cookies may affect the
                functionality of the Site. Some features—such as forms or
                scheduling functionality—may not work properly without them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Do Not Track signals
              </h2>

              <p>
                Some browsers include a “Do Not Track” (DNT) feature that
                signals to websites that you do not want to be tracked. Because
                there is currently no consistent industry standard for
                responding to DNT signals, our Site does not currently respond
                to those signals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Changes to this policy
              </h2>

              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or legal requirements. When we do, the
                “Last updated” date below will be revised.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">
                Contact
              </h2>

              <p>
                If you have questions about this Cookie Policy or our use of
                cookies, you can contact us at:
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
          <Link href="/terms" className="text-primary font-medium hover:underline">
            Terms of Use
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