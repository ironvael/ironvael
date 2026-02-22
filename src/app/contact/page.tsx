import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Contact Us"
            title="Let's start the conversation."
            description="We serve clients worldwide. Whether you have a specific project in mind or just want to learn more about how we work, we'd love to hear from you."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6">Send us a message</h3>
              <ContactForm />
            </div>

            <div className="relative border border-border bg-white p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" aria-hidden />
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">Get in touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reach us by email or phone; we&apos;ll respond within one business day.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                For international clients, please email first—we&apos;ll schedule a toll-free call.
              </p>
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <a href="mailto:inquiries@ironvael.com" className="flex items-center gap-4 group">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-primary font-medium group-hover:underline">inquiries@ironvael.com</span>
                </a>
                <a href="tel:+14062194294" className="flex items-center gap-4 group">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-primary font-medium group-hover:underline">(406) 219-4294</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
