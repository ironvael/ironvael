import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ironvael | Global Consulting Firm",
  description:
    "Business and operations consulting with entity structuring and compliance recovery. Built for operators who want durable systems and clean execution.",
  keywords: [
    "consulting",
    "strategy consulting",
    "management consulting",
    "business transformation",
    "corporate strategy",
    "operations consulting",
  ],
  openGraph: {
    title: "Ironvael | Global Consulting Firm",
    description:
      "We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironvael | Global Consulting Firm",
    description:
      "We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="main-content" aria-label="Home page content">
        <HeroSection />

      <section
        className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background"
        aria-labelledby="who-we-are"
      >
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <SectionHeader
              label="Who We Are"
              title="A consulting firm built for operators."
              id="who-we-are"
              description="Ironvael is a business and operations consulting firm helping leadership teams design structured growth through strategy, execution, and governance."
            />

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We advise founders and management teams on building resilient operating systems—aligning strategy, financial structure, and organizational design to support long-term performance.
              </p>

              <p>
                Our work spans operations consulting, entity structuring and tax strategy (in coordination with your CPA and legal counsel), and compliance recovery—ensuring that growth is supported by durable systems, not short-term fixes.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:underline mt-4 group"
              >
                Learn how we work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16 md:py-20 border-y border-border" aria-label="Firm focus areas">
        <div className="container-padding">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { number: "15+", label: "Industries Supported" },
              { number: "10+", label: "Capabilities Covered" },
              { number: "0", label: "Hidden Fees" },
              { number: "100%", label: "Engagement-specific work" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-background" aria-labelledby="our-capabilities">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <SectionHeader
              label="Our Capabilities"
              title="Transforming businesses through actionable insights."
              id="our-capabilities"
            />
            <Link href="/capabilities">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                View All Capabilities
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: BarChart3, title: "Strategy & Corporate Finance", desc: "Build resilience and competitive advantage in a volatile world.", href: "/capabilities/strategy" },
              { icon: Zap, title: "Transformation & Change", desc: "Drive holistic change to unlock value and sustained growth.", href: "/capabilities/transformation" },
              { icon: Globe, title: "Digital & Analytics", desc: "Harness the power of data and technology to innovate faster.", href: "/capabilities/digital-ai" },
            ].map((service, i) => (
              <Link key={i} href={service.href}>
                <Card className="border-none shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-300 rounded-none bg-white h-full group">
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="h-12 w-12 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    <div className="pt-4">
                      <span className="text-sm font-bold text-primary flex items-center group-hover:underline">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 md:py-32 bg-primary overflow-hidden" aria-labelledby="industries">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt=""
            role="presentation"
            width={2070}
            height={1380}
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="container-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionHeader
                label="Industries"
                title="Operations and advisory built for real-world complexity."
                description="We support operators across multiple industries with practical operations consulting, strategic tax structuring (alongside your CPA/attorney), and compliance recovery."
                light
                id="industries"
              />

              <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {["Consumer Products", "Financial Services", "Energy & Resources", "Technology", "Healthcare", "Public Sector"].map((ind) => (
                  <Link key={ind} href="/industries">
                    <div className="flex items-center text-white/80 hover:text-white cursor-pointer py-2 border-b border-white/10">
                      <ArrowRight className="h-4 w-4 mr-3 opacity-50" />
                      {ind}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl max-w-md w-full md:ml-auto">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4">How We Help</h3>
              <p className="text-muted-foreground mb-6">
                Ironvael engagements are designed to deliver clarity and control—whether you&apos;re scaling operations, cleaning up compliance, or restructuring for long-term efficiency.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Operations Consulting", desc: "Process design, SOPs, KPI dashboards, execution rhythms." },
                  { title: "Entity Structuring + Tax Strategy", desc: "Structural recommendations coordinated with your professionals." },
                  { title: "Compliance Recovery", desc: "Catch-up work, documentation, and systems to stay clean going forward." },
                ].map((item) => (
                  <div key={item.title} className="space-y-1">
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>

              <Button className="w-full rounded-none bg-primary text-white hover:bg-primary/90">
                Explore capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white text-center" aria-labelledby="cta-heading">
        <div className="container-padding max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary">Ready to transform your future?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Let&apos;s discuss how Ironvael can help you achieve your most ambitious goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="min-h-[44px] inline-flex items-center justify-center">
              <Button size="lg" className="w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg rounded-none">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
