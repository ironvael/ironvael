"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight, Package, BarChart2, Leaf, LucideIcon } from "lucide-react";

const HIGHLIGHTS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Package,
    title: "Brand & Portfolio Strategy",
    desc: "Brand positioning, portfolio optimization, and innovation pipelines for sustainable growth.",
  },
  {
    icon: BarChart2,
    title: "Retail & Channel Transformation",
    desc: "E-commerce acceleration, D2C strategy, and omnichannel distribution for the modern consumer.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Purpose",
    desc: "ESG strategy, sustainable sourcing, and purpose-led branding for conscious consumers.",
  },
];

const BODY = [
  "Consumer goods companies face shifting demand, channel fragmentation, and rising expectations around sustainability and transparency. We partner with CPG leaders to build strategies that grow brands, optimize portfolios, and capture value across traditional and digital channels.",
  "Our consumer goods practice combines category expertise with functional depth in marketing, sales, and supply chain. We help clients navigate pricing pressure, private label competition, and the shift to e-commerce and D2C—while building the capabilities needed to innovate and adapt at speed.",
  "Whether the focus is a brand turnaround, a category expansion, or a full transformation of the commercial model, we bring the rigor to execute. We've helped clients grow share, improve margins, and position for M&A—always with the consumer and the retail landscape at the center.",
];

export default function ConsumerGoodsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero — entrance animation */}
      <motion.div
        className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-padding">
          <SectionHeader
            label="Industries"
            title="Consumer Goods"
            description="We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth."
            light
          />
        </div>
      </motion.div>

      {/* Highlights — stagger in on scroll, hover lift */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 sm:p-8 border border-border group cursor-default hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="h-12 w-12 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-6"
                  transition={{ duration: 0.25 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Body — paragraphs fade in */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container-padding max-w-3xl">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {BODY.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — fade in on scroll */}
      <section className="py-16 sm:py-20 md:py-24 bg-white text-center">
        <div className="container-padding max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Ready to grow your consumer brands?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="min-h-[44px] inline-flex items-center justify-center text-primary font-semibold hover:underline"
            >
              <span className="inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
