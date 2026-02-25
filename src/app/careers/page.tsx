import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Hammer,
  Target,
  Eye,
  Shield,
  Mountain,
  Briefcase,
  CheckCircle2,
  Mail,
} from "lucide-react";
import Link from "next/link";

const CAREERS_EMAIL = "careers@ironvael.com";

const OPEN_ROLES = [
  { title: "Operations Consultant", location: "Remote / US", type: "Full-time", example: true },
  { title: "Client Operations Manager", location: "Remote / US", type: "Full-time", example: true },
  { title: "Research & Insights Analyst", location: "Remote / US", type: "Full-time", example: true },
  { title: "Executive Assistant / Ops Coordinator", location: "Remote / US", type: "Full-time or Contract", example: true },
];

const WHY_PILLARS = [
  { icon: Hammer, title: "Craft", desc: "We build systems and structures that last.", support: "Detail-oriented execution, not slide decks." },
  { icon: Target, title: "Ownership", desc: "You own your work from start to finish.", support: "No handoffs into the void." },
  { icon: Eye, title: "Clarity", desc: "We cut through complexity to find what matters.", support: "Clear communication is non-negotiable." },
  { icon: Shield, title: "Integrity", desc: "Client confidences stay protected.", support: "Trust is the foundation." },
  { icon: Mountain, title: "Endurance", desc: "We work on problems that require sustained focus.", support: "Long-term thinking over quick wins." },
];

const WHAT_GREAT_LOOKS_LIKE = [
  "Exceptional writing: clear, concise, free of jargon.",
  "Strong process thinking: you structure ambiguity into actionable steps.",
  "Direct client communication: you can hold difficult conversations with grace.",
  "Bias to action: you ship work on time and follow through.",
  "Rigorous discretion: you handle sensitive information without exception.",
  "Intellectual curiosity paired with intellectual humility.",
  "Comfort with autonomy: you don't need hand-holding.",
];

const BENEFITS = [
  "Competitive compensation aligned with role and experience",
  "Flexible schedule where role and client needs allow",
  "Modern remote collaboration tools and infrastructure",
  "Access to learning resources and skill development",
  "Focused, execution-oriented team culture",
  "Direct exposure to client engagements and decision-making",
];

const HIRING_STEPS = [
  { step: 1, title: "Apply", desc: "Submit your background and interest." },
  { step: 2, title: "Intro call", desc: "Brief conversation to assess fit." },
  { step: 3, title: "Case or task", desc: "A reasonable, role-relevant exercise." },
  { step: 4, title: "Final conversation", desc: "Deeper discussion with the team." },
];

const FAQ_ITEMS = [
  { q: "Is this role fully remote?", a: "Most roles are remote / US. Specific location preferences are noted in each role." },
  { q: "Do you sponsor relocation?", a: "We evaluate relocation support on a case-by-case basis for roles that require it." },
  { q: "Do you hire veterans?", a: "Yes. We value diverse backgrounds including military experience." },
  { q: "How long does the hiring process take?", a: "Typically 2-4 weeks from application to decision. We aim to move quickly." },
  { q: "What level of experience do you look for?", a: "Varies by role. We hire across experience levels, from analysts to senior practitioners." },
  { q: "Do you work with contractors?", a: "Yes. Some roles are structured as contract or contract-to-hire." },
  { q: "How do you handle confidentiality during the process?", a: "All candidate information is treated as strictly confidential." },
  { q: "Do you accept referrals?", a: "Yes. Referrals from trusted sources are welcome." },
];

function buildApplyMailto(roleTitle: string): string {
  const subject = encodeURIComponent("Application: " + roleTitle);
  const body = encodeURIComponent("Name:\nEmail:\nPhone:\nRole of interest: " + roleTitle + "\n\nBrief note:\n");
  return "mailto:" + CAREERS_EMAIL + "?subject=" + subject + "&body=" + body;
}

export const metadata: Metadata = {
  title: "Careers | Ironvael",
  description:
    "Careers at Ironvael. Build enduring systems for serious operators. Operations consulting, entity structuring, tax planning, compliance recovery.",
  openGraph: {
    title: "Careers | Ironvael",
    description:
      "Careers at Ironvael. Build enduring systems for serious operators. Operations consulting, entity structuring, tax planning, compliance recovery.",
  },
};

export default function Careers() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24" aria-labelledby="careers-hero-title">
        <div className="container-padding">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block py-1.5 px-3 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Join the team
            </span>
            <h1 id="careers-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Careers at Ironvael
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              Build enduring systems for serious operators. We partner with founders and executives who want execution, not advice in a binder.
            </p>
            <p className="text-sm text-white/60">Flexible, execution-focused teams. No fluff.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#open-roles" className="min-h-[44px] inline-flex">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none px-6 sm:px-8 h-12 sm:h-14 text-base">
                  View open roles
                </Button>
              </Link>
              <Link href="#hiring-process" className="min-h-[44px] inline-flex">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white rounded-none px-6 sm:px-8 h-12 sm:h-14 text-base">
                  How we hire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background" aria-labelledby="why-ironvael">
        <div className="container-padding">
          <h2 id="why-ironvael" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-10 md:mb-12">
            Why Ironvael
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {WHY_PILLARS.map((item, i) => (
              <Card key={i} className="border border-border hover:border-primary transition-colors rounded-none bg-white h-full group">
                <CardContent className="p-6">
                  <div className="h-10 w-10 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  <p className="text-muted-foreground/80 text-xs mt-2">{item.support}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-secondary border-y border-border" aria-labelledby="what-we-do">
        <div className="container-padding">
          <h2 id="what-we-do" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6 md:mb-8">
            What we do
          </h2>
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed mb-10">
            <p>
              Ironvael advises on{" "}
              <Link href="/capabilities/operations" className="text-primary font-medium hover:underline">
                operations consulting
              </Link>
              ,{" "}
              <Link href="/capabilities/entity-structuring" className="text-primary font-medium hover:underline">
                entity structuring
              </Link>
              ,{" "}
              <Link href="/capabilities/tax-planning" className="text-primary font-medium hover:underline">
                tax planning coordination
              </Link>
              , and compliance recovery. We do not provide bookkeeping, financial services, or generic strategy decks. Our work is hands-on, structured, and built for operators who expect results.
            </p>
            <p>
              Explore our{" "}
              <Link href="/capabilities" className="text-primary font-medium hover:underline">
                capabilities
              </Link>{" "}
              for more detail on{" "}
              <Link href="/capabilities/strategy" className="text-primary font-medium hover:underline">
                strategy
              </Link>
              ,{" "}
              <Link href="/capabilities/transformation" className="text-primary font-medium hover:underline">
                transformation
              </Link>
              , and the full range of our practice.
            </p>
          </div>
        </div>
      </section>

      <section id="open-roles" className="py-12 sm:py-16 md:py-20 bg-background scroll-mt-24" aria-labelledby="open-roles-title">
        <div className="container-padding">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 id="open-roles-title" className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                Open roles
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">Current openings. Examples listed for illustration.</p>
            </div>
          </div>
          <div className="space-y-4">
            {OPEN_ROLES.map((role, i) => (
              <Card key={i} className="border border-border hover:border-primary/50 transition-colors rounded-none">
                <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-serif font-bold text-primary">{role.title}</h3>
                      {role.example && (
                        <span className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5">
                          Example
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {role.location} | {role.type}
                    </p>
                  </div>
                  <a href={buildApplyMailto(role.title)} className="shrink-0" aria-label={"Apply for " + role.title}>
                    <Button size="default" className="rounded-none min-h-[44px] px-6">
                      Apply
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-secondary border-y border-border" aria-labelledby="what-great">
        <div className="container-padding">
          <h2 id="what-great" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-8 md:mb-10">
            What great looks like here
          </h2>
          <ul className="max-w-2xl space-y-4">
            {WHAT_GREAT_LOOKS_LIKE.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background" aria-labelledby="benefits">
        <div className="container-padding">
          <h2 id="benefits" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4">
            Benefits and support
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">Benefits vary by role and location.</p>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {BENEFITS.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                <Briefcase className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="hiring-process" className="py-12 sm:py-16 md:py-20 bg-secondary border-y border-border scroll-mt-24" aria-labelledby="hiring-title">
        <div className="container-padding">
          <h2 id="hiring-title" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-8 md:mb-10">
            How we hire
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {HIRING_STEPS.map((item) => (
              <div key={item.step} className="space-y-2">
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Step {item.step}</span>
                <h3 className="text-lg font-serif font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            We respect your time. Our process is designed to move efficiently without unnecessary rounds.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background" aria-labelledby="faq-title">
        <div className="container-padding">
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-8 md:mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={"faq-" + i}>
                <AccordionTrigger className="text-left py-4 hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-primary text-center" aria-labelledby="final-cta-title">
        <div className="container-padding max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 id="final-cta-title" className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-white">
            Build work that lasts.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#open-roles" className="min-h-[44px] inline-flex">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 rounded-none px-8 sm:px-10 h-12 sm:h-14 text-base">
                View open roles
              </Button>
            </Link>
            <a href={"mailto:" + CAREERS_EMAIL + "?subject=Recruiting%20inquiry"} className="min-h-[44px] inline-flex" aria-label="Email recruiting">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white rounded-none px-8 sm:px-10 h-12 sm:h-14 text-base">
                <Mail className="mr-2 h-4 w-4" />
                Email recruiting
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
