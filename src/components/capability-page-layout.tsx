import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, LucideIcon, Shield, MapPin, Users, Cpu } from "lucide-react";

const CAPABILITY_SUBNAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#get-in-touch", label: "Get in touch" },
];

interface CapabilityPageLayoutProps {
  title: string;
  description: string;
  highlights: { icon: LucideIcon; title: string; desc: string }[];
  body: string[];
  cta?: string;
  /** Optional hero background image path (e.g. "/operations-hero.jpg"). When omitted, uses solid primary. */
  heroImage?: string;
}

export function CapabilityPageLayout({
  title,
  description,
  highlights,
  body,
  cta,
  heroImage,
}: CapabilityPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section
        id="overview"
        className="relative text-white pt-24 sm:pt-28 md:pt-32 pb-[26px] sm:pb-[42px] md:pb-[58px] lg:pb-[74px] scroll-mt-24 overflow-hidden flex flex-col justify-end min-h-[60vh]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0 bg-primary">
          {heroImage && (
            <>
              <img
                src={heroImage}
                alt=""
                role="presentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/80" />
            </>
          )}
        </div>
        <div className="container-padding relative z-10 flex flex-col items-center text-left">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 w-full max-w-3xl">
            Capabilities
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl w-full"
          >
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed w-full">
            {description}
          </p>
        </div>
      </section>

      <nav
        className="hidden lg:block sticky top-0 z-40 bg-white border-b border-border"
        aria-label="Page sections"
      >
        <div className="container-padding">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 py-4">
            {CAPABILITY_SUBNAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="py-6 sm:py-8 bg-secondary border-b border-border" aria-label="Trust indicators">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Operator-led
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              Nationwide
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" aria-hidden />
              Confidential
            </span>
            <span className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" aria-hidden />
              Systems-first
            </span>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-12 sm:py-16 md:py-20 scroll-mt-24">
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

      <section className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24">
        <div className="container-padding max-w-3xl">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {cta && (
        <section id="get-in-touch" className="py-16 sm:py-20 md:py-24 bg-white text-center scroll-mt-24">
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
