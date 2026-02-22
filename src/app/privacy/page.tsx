import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Ironvael",
  description:
    "How Ironvael collects, uses, and protects your information when you contact us or sign up for our newsletter.",
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
              Ironvael Operations (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy describes what information we collect when you use our website, how we use it, and your choices.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Information we collect</h2>
              <p className="mb-3">
                We collect information you provide directly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Contact form.</strong> When you submit the contact form (name, email, company, message), we use that information to respond to your inquiry. Your message is sent to our team via email and may be stored in our systems for follow-up and record-keeping.
                </li>
                <li>
                  <strong className="text-foreground">Newsletter sign-up.</strong> When you subscribe to our newsletter via the footer or elsewhere on the site, we collect your email address. We use it to send you the newsletter and related updates. Your email is delivered to our team and may be retained so we can include you in future mailings until you opt out.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">How we use your information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your contact form submissions and inquiries</li>
                <li>To send newsletter and marketing communications when you have signed up</li>
                <li>To improve our services and communicate with you about our work</li>
                <li>As required by law or to protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Sharing and third parties</h2>
              <p>
                We use third-party services to operate our website and communications. For example, contact form and newsletter sign-up messages are sent and delivered using Resend (email delivery). We do not sell your personal information. We may share information with service providers who assist our operations under confidentiality obligations, or when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Data retention</h2>
              <p>
                We retain contact form and newsletter sign-up information for as long as needed to fulfill the purposes above (e.g., to respond to you, to send newsletters) and for legitimate business and legal purposes. You may ask us to delete your information at any time (see &quot;Your choices and contact&quot; below).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Your choices and contact</h2>
              <p className="mb-3">
                You can unsubscribe from our newsletter at any time using the link in any newsletter email, or by contacting us. You may also request access to, correction of, or deletion of the personal information we hold about you by contacting us at:
              </p>
              <p>
                <a href="mailto:inquiries@ironvael.com" className="text-primary font-medium hover:underline">inquiries@ironvael.com</a>
                <br />
                <a href="tel:+14062194294" className="text-primary font-medium hover:underline">(406) 219-4294</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Updates</h2>
              <p>
                We may update this privacy policy from time to time. The &quot;Last updated&quot; date below will change when we do. We encourage you to review this page periodically.
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
          <Link href="/terms" className="text-primary font-medium hover:underline">Terms of Use</Link>
          <Link href="/cookies" className="text-primary font-medium hover:underline">Cookie Policy</Link>
          <Link href="/contact" className="text-primary font-medium hover:underline">Contact us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
