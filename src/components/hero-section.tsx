"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[max(600px,100dvh)] flex items-center justify-center overflow-hidden bg-primary pt-20 sm:pt-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          role="presentation"
          fetchPriority="high"
          width={2070}
          height={1380}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container-padding relative z-10 pt-20 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-4 sm:space-y-6"
        >
          <span className="inline-block py-1.5 px-3 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            GLOBAL DELIVERY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
            Strategic Business <br />
            <span className="text-white/90 italic">Consulting & Advisory.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
            Operations consulting, entity structuring, and compliance recovery—built to help operators scale with clarity, control, and durable execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Link href="/contact" className="min-h-[44px] inline-flex items-center">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none px-6 sm:px-8 h-12 sm:h-14 text-base">
                Work With Us
              </Button>
            </Link>
            <Link href="/about" className="min-h-[44px] inline-flex items-center">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white rounded-none px-6 sm:px-8 h-12 sm:h-14 text-base">
                Our Approach
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
