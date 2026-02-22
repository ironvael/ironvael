import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CAPABILITIES } from "@/lib/capabilities";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Capabilities"
            title="End-to-end expertise."
            description="From the C-suite to the shop floor, we help clients build capabilities that last."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12">
            {CAPABILITIES.map((cap) => (
              <Link
                key={cap.slug}
                href={`/capabilities/${cap.slug}`}
                className="group border-b border-border pb-6 md:pb-8 hover:border-primary transition-colors block min-h-[44px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                    {cap.title}
                  </h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              alt="Strategy Meeting"
              className="w-full shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                Integrated Solutions
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
              Modern problems cross functional boundaries. Our work integrates operating design, leadership decision-making, and governance so recommendations translate into execution. We document assumptions, define constraints, and deliver an actionable plan your team can run.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
