import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const capabilities = [
    { title: "Strategy", desc: "Corporate strategy, business unit strategy, and value creation planning." },
    { title: "Transformation", desc: "Turnarounds, restructuring, and holistic performance improvement." },
    { title: "Digital & AI", desc: "Digital strategy, AI implementation, and technology modernization." },
    { title: "M&A", desc: "Due diligence, merger integration, and divestitures." },
    { title: "Operations", desc: "Supply chain, procurement, and manufacturing excellence." },
    { title: "Organization", desc: "Talent strategy, organizational design, and culture change." },
    { title: "Marketing & Sales", desc: "Customer insights, pricing strategy, and sales force effectiveness." },
    { title: "Sustainability", desc: "ESG strategy, decarbonization, and sustainable operations." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-32 pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Capabilities"
            title="End-to-end expertise."
            description="From the C-suite to the shop floor, we help clients build capabilities that last."
            light
          />
        </div>
      </div>

      <section className="py-20">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {capabilities.map((cap, i) => (
              <div key={i} className="group border-b border-border pb-8 hover:border-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                    {cap.title}
                  </h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              alt="Strategy Meeting"
              className="w-full shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold">Integrated Solutions</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Modern problems don&apos;t fit neatly into silos. That&apos;s why our teams are cross-functional by design. We bring together data scientists, industry veterans, and strategy experts to solve your toughest challenges from every angle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
