import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Contact Us"
            title="Let's start the conversation."
            description="Whether you have a specific project in mind or just want to learn more about how we work, we'd love to hear from you."
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

            <div className="bg-secondary p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary">Our Offices</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 h-10 w-10 flex items-center justify-center border border-border">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">New York (HQ)</h4>
                    <p className="text-muted-foreground">
                      10 Hudson Yards, Suite 3400<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 h-10 w-10 flex items-center justify-center border border-border">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">London</h4>
                    <p className="text-muted-foreground">
                      25 Canada Square<br />
                      Canary Wharf, London E14 5LQ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-primary font-medium">+1 (212) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-primary font-medium">inquiries@ironvael.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
