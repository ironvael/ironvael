import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { INDUSTRIES } from "@/lib/industries";
import Link from "next/link";

export default function Industries() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Industries"
            title="Sector depth that drives results."
            description="We understand the nuances of your industry because we've been there. Our experts bring decades of sector-specific experience."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="p-5 sm:p-6 border border-border bg-white hover:shadow-lg transition-shadow duration-300 block min-h-[44px]"
              >
                <h3 className="text-xl font-bold font-serif text-primary mb-2">{ind.title}</h3>
                <div className="h-0.5 w-8 bg-accent mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Navigating disruption and seizing growth opportunities in {ind.title.toLowerCase()}.
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center">
                  Explore <span className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
