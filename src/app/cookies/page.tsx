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
              This Cookie Policy explains what cookies are, how Ironvael Operations (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses them on this website, and your choices.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">What are cookies?</h2>
              <p>
                Cookies are small text files that a website stores on your device (computer, tablet, or phone) when you visit. They are widely used to make sites work properly, remember preferences, and understand how visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Cookies we use</h2>
              <p className="mb-3">
                We use only what is necessary to run the site and provide the services you request:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Strictly necessary.</strong> These cookies are essential for the website to function—for example, to maintain your session or security. They cannot be switched off in our systems.
                </li>
                <li>
                  <strong className="text-foreground">Functional.</strong> These cookies enable features such as remembering preferences (e.g. form state) so we can improve how the site works for you.
                </li>
              </ul>
              <p className="mt-3">
                We do not use advertising or third-party tracking cookies on this site. We do not sell data collected via cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Managing cookies</h2>
              <p>
                Most browsers let you control cookies through their settings. You can usually block or delete cookies via your browser&apos;s &quot;Privacy&quot; or &quot;Settings&quot; options. Blocking strictly necessary cookies may affect how the site works (for example, some forms or features may not function correctly).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Updates</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or the law. The &quot;Last updated&quot; date below will change when we do. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Contact</h2>
              <p>
                Questions about our use of cookies? Contact us at{" "}
                <a href="mailto:inquiries@ironvael.com" className="text-primary font-medium hover:underline">inquiries@ironvael.com</a> or{" "}
                <a href="tel:+14062194294" className="text-primary font-medium hover:underline">(406) 219-4294</a>.
              </p>
            </div>

            <p className="text-sm text-muted-foreground pt-4 border-t border-border">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-border">
        <div className="container-padding max-w-3xl flex flex-wrap gap-6 justify-center">
          <Link href="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-primary font-medium hover:underline">Terms of Use</Link>
          <Link href="/contact" className="text-primary font-medium hover:underline">Contact us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
