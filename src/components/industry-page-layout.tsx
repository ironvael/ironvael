import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface IndustryPageLayoutProps {
  title: string;
  description: string;
  highlights: { icon: LucideIcon; title: string; desc: string }[];
  body: string[];
  cta?: string;
}

export function IndustryPageLayout({
  title,
  description,
  highlights,
  body,
  cta,
}: IndustryPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="Industries"
            title={title}
            description={description}
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 border border-border hover:border-primary transition-colors group"
              >
                <div className="h-12 w-12 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-padding max-w-3xl">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {cta && (
        <section className="py-16 sm:py-20 md:py-24 bg-white text-center">
          <div className="container-padding max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-primary">
              {cta}
            </h2>
            <Link href="/contact" className="min-h-[44px] inline-flex items-center justify-center text-primary font-semibold hover:underline">
              <span className="inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
