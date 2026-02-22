import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Globe, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* skyscraper cityscape business */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="City Skyline"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container-padding relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-sm font-medium tracking-wide">
              GLOBAL CONSULTING FIRM
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
              Redefining <br/>
              <span className="text-white/90 italic">performance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
              We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-8 h-14 text-base">
                  Work With Us
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white rounded-none px-8 h-14 text-base">
                  Our Approach
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionHeader 
              label="Who We Are"
              title="A different kind of consulting firm."
              description="Ironvael was founded on a simple premise: clients deserve better. Better insights, deeper partnership, and results that endure."
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                For over two decades, we have helped the world's leading organizations navigate complexity. From Fortune 500 companies to emerging startups, our clients trust us to deliver clarity in times of uncertainty.
              </p>
              <p>
                Our approach combines rigorous analysis with creative strategy, ensuring that every solution is not just theoretically sound, but practically executable.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:underline mt-4 group">
                Read our full story 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="bg-secondary py-20 border-y border-border">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "500+", label: "Clients Served" },
              { number: "40", label: "Global Offices" },
              { number: "$10B+", label: "Value Created" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-2">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-background">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader 
              label="Our Capabilities"
              title="Transforming businesses through actionable insights."
            />
            <Link href="/services">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                View All Capabilities
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Strategy & Corporate Finance", desc: "Build resilience and competitive advantage in a volatile world." },
              { icon: Zap, title: "Transformation & Change", desc: "Drive holistic change to unlock value and sustained growth." },
              { icon: Globe, title: "Digital & Analytics", desc: "Harness the power of data and technology to innovate faster." },
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-300 rounded-none bg-white h-full group">
                <CardContent className="p-8 space-y-6">
                  <div className="h-12 w-12 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div className="pt-4">
                    <span className="text-sm font-bold text-primary flex items-center group-hover:underline cursor-pointer">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Parallax-like */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* industrial warehouse factory */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Industry"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        <div className="container-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                label="Industries"
                title="Deep expertise across key sectors."
                description="Our consultants bring deep industry experience, allowing us to understand the specific challenges and opportunities within your sector."
                light
              />
              <div className="mt-10 grid grid-cols-2 gap-4">
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
            
            <div className="bg-white p-8 md:p-12 shadow-2xl max-w-md ml-auto">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Case Study</h3>
              <p className="text-muted-foreground mb-6">
                How we helped a global energy giant transition to renewable sources while maintaining profitability during the shift.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-accent">35%</span>
                  <span className="text-sm font-medium text-foreground">Reduction in carbon footprint</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-accent">$2.1B</span>
                  <span className="text-sm font-medium text-foreground">Added market value</span>
                </div>
              </div>
              <Button className="w-full rounded-none bg-primary text-white hover:bg-primary/90">Read Case Study</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container-padding max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">Ready to transform your future?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how Ironvael can help you achieve your most ambitious goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-10 h-14 text-lg rounded-none">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
