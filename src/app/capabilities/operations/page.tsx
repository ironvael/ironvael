"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Shield, MapPin, Users, Cpu, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SUBNAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#why-it-matters", label: "Why it matters" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#engagement-models", label: "Engagement models" },
  { href: "#process", label: "Process" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#faqs", label: "FAQs" },
];

const HERO_PILLS = [
  {
    id: "visibility",
    label: "Visibility",
    bullets: [
      "Real-time view of cost, throughput, and bottlenecks",
      "Single source of truth for operations metrics",
      "Dashboards that drive decisions, not just reports",
      "Clear line of sight from strategy to execution",
      "Early warning on variance and risk",
    ],
    deliverables: [
      "KPI and dashboard design",
      "Data and metric governance",
      "Visibility roadmap",
    ],
  },
  {
    id: "margin",
    label: "Margin",
    bullets: [
      "Spend and cost driver analysis",
      "Sourcing and procurement opportunity mapping",
      "Process and waste reduction",
      "Sustainable cost structure, not one-time cuts",
      "Margin by product, channel, and customer",
    ],
    deliverables: [
      "Cost and spend analysis",
      "Sourcing strategy",
      "Savings and efficiency plan",
    ],
  },
  {
    id: "execution",
    label: "Execution",
    bullets: [
      "Process clarity and handoff discipline",
      "Accountability and ownership by role",
      "Routines that prevent firefighting",
      "Implementation and rollout support",
      "Capability transfer to your team",
    ],
    deliverables: [
      "Process maps and workflows",
      "Implementation plan",
      "Handoff and training materials",
    ],
  },
  {
    id: "scale",
    label: "Scale",
    bullets: [
      "Operating model that grows with you",
      "Network and capacity planning",
      "Resilience and risk mitigation",
      "Systems and process that scale without reinvention",
      "Clear playbook for the next stage",
    ],
    deliverables: [
      "Operating model design",
      "Scale and resilience assessment",
      "Growth readiness plan",
    ],
  },
];

const SNAPSHOT_CATEGORIES = [
  { label: "Process clarity", score: 35 },
  { label: "Data visibility", score: 50 },
  { label: "Accountability", score: 45 },
  { label: "Cost transparency", score: 40 },
  { label: "Resilience", score: 30 },
  { label: "Scalability", score: 55 },
];

const CAPABILITIES_ACCORDION = [
  {
    title: "Supply chain design",
    bullets: [
      "Network optimization and facility footprint",
      "Flow design for cost and service",
      "Make vs buy and outsourcing review",
    ],
    deliverable: "Supply chain and network analysis memo",
  },
  {
    title: "Procurement & sourcing",
    bullets: [
      "Strategic sourcing and supplier segmentation",
      "Spend analytics and opportunity identification",
      "Category strategy and RFx support",
    ],
    deliverable: "Sourcing and supplier strategy document",
  },
  {
    title: "Inventory management",
    bullets: [
      "Safety stock and reorder policy design",
      "Inventory health by channel and SKU",
      "Working capital and service level tradeoffs",
    ],
    deliverable: "Inventory and policy recommendations",
  },
  {
    title: "Logistics & distribution",
    bullets: [
      "Transport mode and routing review",
      "Warehouse operations and layout",
      "Last-mile and delivery options",
    ],
    deliverable: "Logistics and distribution assessment",
  },
  {
    title: "Manufacturing & production",
    bullets: [
      "Lean operations and throughput",
      "Capacity planning and bottlenecks",
      "Quality and consistency improvement",
    ],
    deliverable: "Manufacturing improvement plan",
  },
  {
    title: "Process & workflow",
    bullets: [
      "Process mapping and handoff discipline",
      "Bottleneck and delay identification",
      "Cross-functional workflow design",
    ],
    deliverable: "Process maps and workflow documentation",
  },
  {
    title: "Performance & metrics",
    bullets: [
      "KPI and dashboard design",
      "Accountability and ownership structure",
      "Variance and exception management",
    ],
    deliverable: "KPI framework and dashboard design",
  },
  {
    title: "Resilience & risk",
    bullets: [
      "Supplier diversification and single-point-of-failure review",
      "Scenario planning and continuity readiness",
      "Risk register and mitigation actions",
    ],
    deliverable: "Resilience and risk assessment",
  },
  {
    title: "Cost & efficiency",
    bullets: [
      "Cost driver and variance analysis",
      "Sustainable cost reduction (not one-time cuts)",
      "Efficiency by function and process",
    ],
    deliverable: "Cost and efficiency analysis",
  },
  {
    title: "Implementation support",
    bullets: [
      "Rollout planning and sequencing",
      "Change management and communication",
      "Capability transfer and training",
    ],
    deliverable: "Implementation and handoff plan",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery & scope", desc: "We align on objectives, constraints, and success criteria and confirm scope and deliverables.", id: "process-step-1" },
  { num: "02", title: "Analysis & design", desc: "We gather data, map processes, and develop recommendations with assumptions documented.", id: "process-step-2" },
  { num: "03", title: "Review & refine", desc: "We socialize findings with your team and adjust based on feedback and constraints.", id: "process-step-3" },
  { num: "04", title: "Deliver & handoff", desc: "We deliver final work product and support implementation or capability transfer.", id: "process-step-4" },
];

const OPERATING_SYSTEM_PILLARS = [
  { title: "Visibility", body: "You cannot improve what you do not measure. We build clarity on cost, performance, and risk so decisions are grounded in fact." },
  { title: "Accountability", body: "Clear ownership by role and process. No gray zones—every outcome ties to someone who can act." },
  { title: "Discipline", body: "Routines, handoffs, and governance that reduce firefighting and make execution consistent." },
  { title: "Improvement", body: "Continuous learning and iteration. We equip your team to own the next cycle of change." },
];

function LeadFormCard({ idPrefix = "" }: { idPrefix?: string }) {
  const nameId = idPrefix ? `${idPrefix}-lead-name` : "lead-name";
  const emailId = idPrefix ? `${idPrefix}-lead-email` : "lead-email";
  const companyId = idPrefix ? `${idPrefix}-lead-company` : "lead-company";
  const notesId = idPrefix ? `${idPrefix}-lead-notes` : "lead-notes";
  return (
    <Card className="rounded-none border border-white/20 bg-white/5 shadow-lg backdrop-blur-sm">
      <CardHeader className="pb-4">
        <h3 className="text-lg font-serif font-semibold text-white">
          Request a call
        </h3>
        <p className="text-sm text-white/70">
          We&apos;ll respond within one business day.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor={nameId} className="sr-only">Name</label>
          <input
            id={nameId}
            type="text"
            placeholder="Name"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="sr-only">Email</label>
          <input
            id={emailId}
            type="email"
            placeholder="Email"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor={companyId} className="sr-only">Company</label>
          <input
            id={companyId}
            type="text"
            placeholder="Company"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor={notesId} className="sr-only">Notes</label>
          <textarea
            id={notesId}
            placeholder="Notes"
            rows={3}
            className="w-full resize-none rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <Button
          type="button"
          className="w-full rounded-none bg-white text-primary hover:bg-white/90"
          size="lg"
        >
          Send
        </Button>
      </CardContent>
    </Card>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-6 first:pt-0 last:border-b-0">
      <h3 className="text-lg font-serif font-semibold text-primary mb-2">
        {question}
      </h3>
      <div className="text-muted-foreground leading-relaxed">{answer}</div>
    </div>
  );
}

export default function OperationsPage() {
  const [activePill, setActivePill] = useState(HERO_PILLS[0].id);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const processStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer for process steps
  useEffect(() => {
    const refs = processStepRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = refs.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveProcessStep(index);
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    refs.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activePillData = HERO_PILLS.find((p) => p.id === activePill) ?? HERO_PILLS[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero with pill selector */}
      <section
        id="overview"
        className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 scroll-mt-24"
        aria-labelledby="hero-heading"
      >
        <div className="container-padding">
          <div className="grid lg:grid-cols-[1fr,380px] gap-10 lg:gap-12 items-start">
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight"
              >
                Operations that scale with your strategy.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                Supply chain, procurement, and manufacturing excellence—built for efficiency, resilience, and sustainable cost advantage.
              </p>

              {/* Pill tabs */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Focus area">
                {HERO_PILLS.map((pill) => (
                  <button
                    key={pill.id}
                    type="button"
                    role="tab"
                    aria-selected={activePill === pill.id}
                    onClick={() => setActivePill(pill.id)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-none border",
                      activePill === pill.id
                        ? "bg-white text-primary border-white"
                        : "border-white/30 text-white/90 hover:border-white/50 hover:bg-white/5"
                    )}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="transition-opacity duration-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">Focus areas</p>
                  <ul className="space-y-2 text-white/90">
                    {activePillData.bullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-white/60 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="transition-opacity duration-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">Typical deliverables</p>
                  <ul className="space-y-1.5 text-white/90">
                    {activePillData.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-white/60 shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="min-h-[44px] inline-flex items-center">
                  <Button
                    size="lg"
                    className="rounded-none bg-white text-primary hover:bg-white/90 px-6 h-12"
                  >
                    Start a conversation
                  </Button>
                </Link>
                <a
                  href="#final-cta"
                  className="min-h-[44px] inline-flex items-center justify-center rounded-none border border-white/40 text-white hover:bg-white/10 px-6 h-12 text-sm font-medium"
                >
                  Request an operations diagnostic
                </a>
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <LeadFormCard idPrefix="ops-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky subnav — desktop only */}
      <nav
        className="hidden lg:block sticky top-0 z-40 bg-white border-b border-border"
        aria-label="Page sections"
      >
        <div className="container-padding">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 py-4">
            {SUBNAV_LINKS.map((link) => (
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

      {/* Trust micro-bar */}
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

      {/* Operations Snapshot — dashboard-style */}
      <section
        id="snapshot"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="snapshot-heading"
      >
        <div className="container-padding">
          <div className="max-w-2xl">
            <SectionHeader
              label="Quick lens"
              title="Operations Snapshot"
              id="snapshot-heading"
              description="A simple diagnostic view of where operations stand. We use this lens in early conversations to focus on the areas that matter most."
            />
          </div>
          <Card className="mt-10 rounded-none border border-border max-w-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-serif">Snapshot categories</CardTitle>
              <p className="text-sm text-muted-foreground font-normal">
                Rate each dimension to see where to focus. This is illustrative—we tailor the actual diagnostic to your context.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              {SNAPSHOT_CATEGORIES.map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-primary">{cat.label}</span>
                    <span className="text-muted-foreground">{cat.score}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${cat.score}%` }}
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why it matters */}
      <section
        id="why-it-matters"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="why-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Why it matters"
            title="Operations gaps compound."
            id="why-heading"
            description="Unaddressed, they drive cost, risk, and missed growth."
          />
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-12">
            <div className="p-6 border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                Reactive leadership
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When operations run on firefighting and tribal knowledge, leadership spends time on execution instead of strategy. Priorities slip and decisions lag.
              </p>
            </div>
            <div className="p-6 border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                No visibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Without clear metrics, processes, and accountability, cost and performance stay opaque. You cannot improve what you do not measure.
              </p>
            </div>
            <div className="p-6 border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                Growth strain
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Scaling on top of ad-hoc systems creates bottlenecks, quality issues, and rising cost. What worked at one size fails at the next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — accordions */}
      <section
        id="what-we-do"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="what-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="What we do"
            title="Specific capabilities."
            id="what-heading"
            description="We focus on advisory, design, and implementation support—not ongoing execution or outsourcing."
          />
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {CAPABILITIES_ACCORDION.map((cap, i) => (
              <AccordionItem key={i} value={`cap-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif font-semibold text-primary hover:no-underline py-4">
                  {cap.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground mb-4">
                    {cap.bullets.map((b, j) => (
                      <li key={j} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    <span className="font-semibold text-primary">Deliverable:</span>{" "}
                    <span className="text-muted-foreground">{cap.deliverable}</span>
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Outcomes */}
      <section
        id="outcomes"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="outcomes-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Outcomes"
            title="What you can expect."
            id="outcomes-heading"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              { title: "Clarity", body: "A clear view of how operations support strategy, where cost and risk sit, and what to fix first." },
              { title: "Control", body: "Processes, metrics, and accountability that reduce firefighting and support consistent execution." },
              { title: "Scalability", body: "Operating design that can grow with you—without reinventing the playbook at each stage." },
            ].map((item, i) => (
              <Card key={i} className="rounded-none border border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container-padding text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-4">
            Ready to strengthen your operations?
          </h2>
          <p className="text-white/80 mb-6">
            Start with a no-obligation conversation about your priorities and options.
          </p>
          <Link href="/contact" className="min-h-[44px] inline-flex items-center">
            <Button
              size="lg"
              className="rounded-none bg-white text-primary hover:bg-white/90 px-6 h-12"
            >
              Start a conversation
            </Button>
          </Link>
        </div>
      </section>

      {/* Engagement models */}
      <section
        id="engagement-models"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="engagement-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Engagement models"
            title="How we work with you."
            id="engagement-heading"
            description="We match the engagement to the problem."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              {
                title: "Project-based",
                bestFor: "Discrete initiatives: supply chain redesign, procurement program, process or facility improvement.",
                whatYouGet: "Scoped deliverables, milestones, and handoff to your team.",
                timeline: "Weeks to a few months.",
              },
              {
                title: "Retainer",
                bestFor: "Ongoing support: quarterly reviews, ad-hoc analysis, and implementation guidance.",
                whatYouGet: "Dedicated capacity and continuity across initiatives.",
                timeline: "Ongoing; typically 6–12 month initial commitment.",
              },
              {
                title: "Operating partner",
                bestFor: "Deep integration: operations embedded in strategy and execution rhythm.",
                whatYouGet: "Seat at the table for major decisions, ownership of key initiatives, and capability transfer.",
                timeline: "Ongoing; multi-quarter or multi-year.",
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-none border border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Best for</span>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.bestFor}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">What you get</span>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.whatYouGet}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Typical timeline</span>
                    <p className="text-muted-foreground mt-1 text-sm">{item.timeline}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process — timeline with active step */}
      <section
        id="process"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="process-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Process"
            title="How engagements run."
            id="process-heading"
            description="Structured, with clear milestones and handoffs."
          />
          {/* Step selector */}
          <div className="flex flex-wrap gap-2 mt-10 mb-10" role="tablist" aria-label="Process steps">
            {PROCESS_STEPS.map((step, i) => (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={activeProcessStep === i}
                onClick={() => {
                  setActiveProcessStep(i);
                  processStepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all rounded-none border",
                  activeProcessStep === i
                    ? "bg-primary text-white border-primary"
                    : "bg-background border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {step.num} {step.title}
              </button>
            ))}
          </div>
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { processStepRefs.current[i] = el; }}
                id={step.id}
                className={cn(
                  "border-l-2 pl-6 transition-colors duration-200",
                  activeProcessStep === i ? "border-primary" : "border-border"
                )}
              >
                <span className={cn(
                  "text-2xl font-serif font-bold",
                  activeProcessStep === i ? "text-primary" : "text-primary/60"
                )}>
                  {step.num}
                </span>
                <h3 className="text-lg font-serif font-semibold text-primary mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section
        id="before-after"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="before-after-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Transformation"
            title="Before → After"
            id="before-after-heading"
            description="Qualitative shifts we help clients make—no generic metrics."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                before: "Decisions wait on spreadsheets and tribal knowledge. Leadership is in the weeds.",
                after: "Clear metrics and ownership. Leadership focuses on strategy; operators own execution.",
              },
              {
                before: "Cost and performance are opaque. Surprises show up late.",
                after: "Visibility into cost drivers, variance, and risk. Issues surface early with clear owners.",
              },
              {
                before: "Growth means more firefighting. Processes don’t scale.",
                after: "Operating model and playbooks that scale. New volume doesn’t mean reinventing the wheel.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border p-6">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                  <p className="text-muted-foreground leading-relaxed">{item.before}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">After</p>
                  <p className="text-primary leading-relaxed">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ironvael Operating System */}
      <section
        id="operating-system"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="operating-system-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Framework"
            title="The Ironvael Operating System"
            id="operating-system-heading"
            description="Four pillars that guide how we design and improve operations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {OPERATING_SYSTEM_PILLARS.map((pillar, i) => (
              <div key={i} className="p-6 bg-background border border-border">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        id="deliverables"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="deliverables-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Deliverables"
            title="Tangible outputs."
            id="deliverables-heading"
            description="What we produce—advisory and design; we do not provide ongoing bookkeeping or HR outsourcing."
          />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-12 max-w-4xl">
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Supply chain and network analysis memos",
                "Sourcing and supplier strategy documents",
                "Process maps and workflow documentation",
                "KPI and dashboard design",
                "Cost and efficiency analysis",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Implementation and rollout plans",
                "Resilience and risk assessment",
                "Presentation decks for leadership",
                "Training and handoff materials",
                "Ongoing coordination and action registers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ + disclaimer */}
      <section
        id="faqs"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="faqs-heading"
      >
        <div className="container-padding max-w-3xl">
          <SectionHeader
            label="FAQs"
            title="Common questions."
            id="faqs-heading"
          />
          <div className="mt-12">
            <FAQItem
              question="What does Ironvael do versus our internal ops team?"
              answer="We advise, design, and support implementation. Your team owns execution. We bring structure, analytics, and cross-industry perspective; we do not replace your operators or run your operations day to day."
            />
            <FAQItem
              question="Do you provide bookkeeping or accounting services?"
              answer="No. We do not provide bookkeeping, accounting, or financial statement preparation. We focus on operations design, process improvement, and performance management. Your finance and accounting functions remain with your team or your accountant."
            />
            <FAQItem
              question="Do you provide HR outsourcing or payroll?"
              answer="No. We do not provide HR outsourcing, payroll, or benefits administration. We may advise on org design, roles, and accountability as part of an operations engagement, but HR operations stay with your organization or your HR provider."
            />
            <FAQItem
              question="How long do engagements typically take?"
              answer="Project-based work often runs from a few weeks to several months depending on scope. Retainer and operating-partner arrangements are ongoing with initial terms typically in the 6–12 month range."
            />
            <FAQItem
              question="What do you need from us to get started?"
              answer="We typically start with a call to understand your situation, priorities, and constraints. From there we propose scope and deliverables. Access to key operators and relevant data is helpful once we are under way but not required for the first conversation."
            />
            <FAQItem
              question="How is pricing structured?"
              answer="We use fixed-fee project scopes or monthly retainers so you have predictable cost. Specific pricing depends on scope and is outlined in a proposal after we discuss your needs."
            />
            <FAQItem
              question="Do you work with companies outside our region?"
              answer="Yes. We work with clients nationwide and can coordinate remotely. On-site work can be arranged when it adds value."
            />
            <FAQItem
              question="What if we only need a one-off diagnostic?"
              answer="We can scope a discrete diagnostic—e.g., supply chain health, procurement opportunity, or process review—with a fixed fee and clear deliverables and timeline."
            />
            <FAQItem
              question="Can you help with implementation?"
              answer="We support implementation through rollout planning, change management, and capability transfer. We do not take over ongoing execution; we equip your team to own it."
            />
          </div>
          <div className="mt-12 p-6 border border-border bg-background">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> Ironvael provides advisory, design, and implementation support for operations. We do not provide bookkeeping, accounting, HR outsourcing, or payroll services. Those functions remain with your organization or your chosen providers.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section
        id="final-cta"
        className="py-16 sm:py-20 md:py-24 bg-primary text-white scroll-mt-24"
        aria-labelledby="final-cta-heading"
      >
        <div className="container-padding">
          <div className="grid lg:grid-cols-[1fr,380px] gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 id="final-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium leading-tight">
                Start a conversation.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                Whether you have a discrete project or want ongoing operations support, we begin with a no-obligation call to understand your priorities and options.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="min-h-[44px] inline-flex items-center">
                  <Button
                    size="lg"
                    className="rounded-none bg-white text-primary hover:bg-white/90 px-6 h-12"
                  >
                    Start a conversation
                  </Button>
                </Link>
                <a
                  href="#overview"
                  className="min-h-[44px] inline-flex items-center justify-center rounded-none border border-white/40 text-white hover:bg-white/10 px-6 h-12 text-sm font-medium"
                >
                  Request an operations diagnostic
                </a>
              </div>
            </div>
            <LeadFormCard idPrefix="ops-final" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
