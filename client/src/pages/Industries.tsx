import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Check } from "lucide-react";

export default function Industries() {
  const industries = [
    "Advanced Manufacturing", "Aerospace & Defense", "Automotive", "Consumer Products", 
    "Energy & Resources", "Financial Services", "Healthcare & Life Sciences", "Private Equity",
    "Public Sector", "Retail", "Technology, Media & Telco", "Transportation & Logistics"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-secondary pt-32 pb-20">
        <div className="container-padding">
          <SectionHeader 
            label="Industries"
            title="Sector depth that drives results."
            description="We understand the nuances of your industry because we've been there. Our experts bring decades of sector-specific experience."
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="p-6 border border-border bg-white hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold font-serif text-primary mb-2">{ind}</h3>
                <div className="h-0.5 w-8 bg-accent mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Navigating disruption and seizing growth opportunities in {ind.toLowerCase()}.
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center">
                  Explore <span className="ml-2">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
