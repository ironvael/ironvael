import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Shield, MapPin, Users, FileCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Planning",
  description:
    "Corporate tax strategy, M&A structuring, and tax-efficient entity design to optimize cash flow and preserve value.",
  openGraph: {
    title: "Tax Planning",
    description:
      "Corporate tax strategy, M&A structuring, and tax-efficient entity design to optimize cash flow and preserve value.",
  },
};

const SUBNAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#why-it-matters", label: "Why it matters" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#engagement-models", label: "Engagement models" },
  { href: "#process", label: "Process" },
  { href: "#deliverables", label: "Deliverables" },
  { href: "#faqs", label: "FAQs" },
];

function LeadFormCard() {
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
          <label htmlFor="lead-name" className="sr-only">Name</label>
          <input
            id="lead-name"
            type="text"
            placeholder="Name"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="sr-only">Email</label>
          <input
            id="lead-email"
            type="email"
            placeholder="Email"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor="lead-company" className="sr-only">Company</label>
          <input
            id="lead-company"
            type="text"
            placeholder="Company"
            className="w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor="lead-notes" className="sr-only">Notes</label>
          <textarea
            id="lead-notes"
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

export default function TaxPlanningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        id="overview"
        className="relative text-white pt-24 sm:pt-28 md:pt-32 pb-[26px] sm:pb-[42px] md:pb-[58px] lg:pb-[74px] scroll-mt-24 overflow-hidden flex flex-col justify-end min-h-[60vh]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0 bg-primary">
          <img
            src="/tax-planning-hero.png"
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container-padding relative z-10 flex flex-col items-center text-left">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 w-full max-w-3xl">
            Capabilities
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl w-full"
          >
            Tax Planning
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed w-full">
            Corporate tax strategy, M&A structuring, and entity design—aligned with your operations and coordinated with your CPA and counsel.
          </p>
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
              <Shield className="h-4 w-4 text-primary" aria-hidden />
              Confidential
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              Nationwide
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Operator-led
            </span>
            <span className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-primary" aria-hidden />
              Works with your CPA
            </span>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section
        id="why-it-matters"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="why-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Why it matters"
            title="Tax touches every major decision."
            id="why-heading"
            description="Left unaddressed, it drives cash leakage, risk, and delay."
          />
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-12">
            <div className="p-6 border border-border">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                Cash leakage
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Overpayments, missed credits, and suboptimal structures drain cash that could fund growth or distributions.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                Risk
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Aggressive positions without documentation or alignment with your advisors create audit and reputational exposure.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                Decision drag
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deals and operating decisions stall when tax implications are unclear or siloed from the rest of the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — 8-item grid */}
      <section
        id="what-we-do"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="what-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="What we do"
            title="Specific offerings."
            id="what-heading"
            description="We focus on advisory and coordination—not preparation or legal advice."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Entity architecture", desc: "Holding structures, legal entity rationalization, and jurisdictional alignment." },
              { title: "Intercompany design", desc: "Transfer pricing and intercompany agreements aligned with operations." },
              { title: "Scenario modeling", desc: "Tax impact of deals, restructurings, and key operating decisions." },
              { title: "Transaction planning support", desc: "M&A and carve-out tax structuring in coordination with your advisors." },
              { title: "Effective tax rate & cash tax", desc: "ETR optimization, credit utilization, and cash tax forecasting." },
              { title: "Incentive & credit mapping", desc: "Identification of R&D, jobs, and other incentives relevant to your footprint." },
              { title: "Compliance coordination", desc: "Handoff and timeline alignment with your CPA or tax preparer." },
              { title: "Governance & documentation", desc: "Policies and documentation to support positions and audits." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-background border border-border"
              >
                <h3 className="font-serif font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — 3 cards */}
      <section
        id="outcomes"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
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
              { title: "Clarity", body: "A clear view of tax implications for strategy, M&A, and operating decisions." },
              { title: "Control", body: "Structures and processes that reduce surprise and support defensible positions." },
              { title: "Optionality", body: "Options and tradeoffs spelled out so leadership can choose with confidence." },
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
            Ready to align tax with strategy?
          </h2>
          <p className="text-white/80 mb-6">
            Start with a no-obligation conversation about your situation and options.
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
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
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
                title: "Project-based advisory",
                bestFor: "Discrete initiatives: deal structuring, entity redesign, one-time modeling.",
                whatYouGet: "Scoped deliverables, defined milestones, and a clear handoff to your team or CPA.",
                timeline: "Weeks to a few months.",
              },
              {
                title: "Retainer",
                bestFor: "Ongoing support: quarterly planning, ad-hoc questions, and coordination with your advisors.",
                whatYouGet: "Dedicated capacity, regular touchpoints, and continuity across decisions.",
                timeline: "Ongoing; typically 6–12 month initial commitment.",
              },
              {
                title: "Operating partner",
                bestFor: "Deep integration: tax embedded in strategy, M&A, and operating rhythm.",
                whatYouGet: "Seat at the table for major decisions, documentation and process ownership, and direct coordination with your CPA and counsel.",
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

      {/* Process — 4 steps */}
      <section
        id="process"
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
        aria-labelledby="process-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Process"
            title="How engagements run."
            id="process-heading"
            description="Structured, with clear milestones and handoffs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { num: "01", title: "Discovery & scope", desc: "We align on objectives, constraints, and deliverables and confirm coordination with your CPA or counsel." },
              { num: "02", title: "Analysis & design", desc: "We build models, map options, and draft recommendations with assumptions documented." },
              { num: "03", title: "Review & refine", desc: "We socialize findings with your team and advisors and adjust as needed." },
              { num: "04", title: "Deliver & handoff", desc: "We deliver final work product and support implementation or handoff to your preparers." },
            ].map((step, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <span className="text-2xl font-serif font-bold text-primary/60">{step.num}</span>
                <h3 className="text-lg font-serif font-semibold text-primary mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        id="deliverables"
        className="py-12 sm:py-16 md:py-20 bg-secondary scroll-mt-24"
        aria-labelledby="deliverables-heading"
      >
        <div className="container-padding">
          <SectionHeader
            label="Deliverables"
            title="Tangible outputs."
            id="deliverables-heading"
            description="What we produce—all advisory; no filing or legal work."
          />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-12 max-w-4xl">
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Entity and holding structure memos",
                "Tax impact models and scenario summaries",
                "Intercompany and transfer pricing documentation",
                "Deal and restructuring tax memos",
                "ETR and cash tax projections",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Incentive and credit mapping",
                "Compliance calendar and handoff materials",
                "Policies and governance documentation",
                "Presentation decks for leadership or boards",
                "Ongoing coordination notes and action items",
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
        className="py-12 sm:py-16 md:py-20 scroll-mt-24"
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
              question="How does Ironvael work with my CPA?"
              answer="We advise on strategy, structure, and planning; your CPA or tax preparer handles filing and compliance. We coordinate with them so positions are consistent and handoffs are clear. We do not replace your CPA."
            />
            <FAQItem
              question="Does Ironvael prepare or file tax returns?"
              answer="No. We provide advisory support, modeling, and coordination. Tax preparation and filing remain with your CPA or tax firm."
            />
            <FAQItem
              question="Do you provide legal or legal tax advice?"
              answer="No. We do not provide legal services or legal opinions. For legal and regulatory matters we work alongside your counsel and refer when appropriate."
            />
            <FAQItem
              question="How long do engagements typically take?"
              answer="Project-based work often runs from a few weeks to a few months depending on scope. Retainer and operating-partner arrangements are ongoing with initial terms typically in the 6–12 month range."
            />
            <FAQItem
              question="What do you need from us to get started?"
              answer="We typically start with a call to understand your situation, objectives, and timeline. From there we propose scope and deliverables. Having your current structure (entities, ownership) and any relevant deal or planning context is helpful but not required for the first conversation."
            />
            <FAQItem
              question="How is pricing structured?"
              answer="We use fixed-fee project scopes or monthly retainers so you have predictable cost. We do not charge success fees or contingent arrangements. Specific pricing depends on scope and is outlined in a proposal after we discuss your needs."
            />
            <FAQItem
              question="Do you work with companies outside our region?"
              answer="Yes. We work with clients nationwide and can coordinate remotely. On-site work can be arranged when it adds value."
            />
            <FAQItem
              question="What if we only need a one-off review?"
              answer="Project-based engagements are designed for discrete needs. We can scope a single deliverable—e.g., a structure memo or scenario model—with a fixed fee and clear timeline."
            />
          </div>
          <div className="mt-12 p-6 border border-border bg-secondary">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> Ironvael provides advisory support and coordination; we do not provide tax filing or legal services. Tax preparation and filing are performed by your CPA or tax preparer. Legal advice should be obtained from qualified counsel.
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
                Whether you have a discrete project or want ongoing tax strategy support, we begin with a no-obligation call to understand your situation and options.
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
                  Request a tax strategy call
                </a>
              </div>
            </div>
            <LeadFormCard />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
