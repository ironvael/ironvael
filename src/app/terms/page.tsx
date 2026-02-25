import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Ironvael",
  description:
    "Terms and conditions for using the Ironvael website and services.",
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
            description="Terms and conditions for using this website."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10 text-muted-foreground">
            <p className="text-base leading-relaxed">
              Welcome to the Ironvael Operations website. By accessing or using this site, you agree to these Terms of Use. If you do not agree, please do not use the site.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Use of the site</h2>
              <p>
                You may use this website for lawful purposes only. You may not use it to transmit harmful code, attempt to gain unauthorized access to our or others&apos; systems, or use it in any way that violates applicable laws or these terms. We reserve the right to restrict or terminate access at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Intellectual property</h2>
              <p>
                Content on this site—including text, graphics, logos, and design—is owned by Ironvael or its licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or use our content for commercial purposes without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">No professional advice</h2>
              <p>
                The content on this website is for general information only and does not constitute professional, legal, tax, or financial advice. You should seek appropriate professional advice for your specific situation. Any engagement for our services is subject to a separate agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Disclaimer of warranties</h2>
              <p>
                This website is provided &quot;as is.&quot; We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, express or implied, to the fullest extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Ironvael and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of or inability to use this website, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Links to other sites</h2>
              <p>
                This site may contain links to third-party websites. We are not responsible for the content or practices of those sites. Links do not imply endorsement. Use of linked sites is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Changes</h2>
              <p>
                We may update these Terms of Use from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date. Your continued use of the site after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-3">Contact</h2>
              <p>
                Questions about these terms? Contact us at{" "}
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
          <Link href="/cookies" className="text-primary font-medium hover:underline">Cookie Policy</Link>
          <Link href="/contact" className="text-primary font-medium hover:underline">Contact us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
