import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Search, GitMerge, Split } from "lucide-react";

export const metadata: Metadata = {
  title: "M&A Due Diligence, Integration & Carve-Outs | Ironvael",
  description:
    "Institutional-grade M&A advisory: operational due diligence, merger integration, and carve-out execution. We focus on value capture and execution discipline—not just decks.",
  keywords: [
    "M&A due diligence",
    "merger integration",
    "carve-out",
    "divestiture",
    "integration management office",
    "100-day plan",
    "synergy model",
    "Day One readiness",
    "TSA",
    "operational diligence",
  ],
  openGraph: {
    title: "M&A Due Diligence, Integration & Carve-Outs | Ironvael",
    description:
      "Institutional-grade M&A advisory: operational due diligence, merger integration, and carve-out execution. We focus on value capture and execution discipline—not just decks.",
  },
};

export default function MAPage() {
  return (
    <CapabilityPageLayout
      title="M&A"
      heroImage="/ma-hero.png"
      description="Operational due diligence, merger integration, and carve-out execution. We focus on value capture and execution discipline—not just decks."
      highlights={[
        {
          icon: Search,
          title: "Due Diligence",
          desc: "Operational and commercial diligence that tests the operating model and synergy thesis. We stress-test integration complexity, stranded costs, and carve-out readiness so you close with eyes open.",
        },
        {
          icon: GitMerge,
          title: "Merger Integration",
          desc: "Integration management office (IMO) discipline: Day One readiness, 100-day plan execution, and value-capture tracking. We help turn the deal thesis into delivered synergies.",
        },
        {
          icon: Split,
          title: "Divestitures",
          desc: "Carve-out strategy, separation planning, and TSA design. We prepare sellers for clean-room diligence and separation execution that preserves value and enables a clean exit.",
        },
      ]}
      body={[
        "M&A creates or destroys value at speed. We advise acquirers who need diligence and integration that actually deliver synergies; sellers who need carve-out and separation executed for a clean exit; and PE or strategic operators who need a partner in the messy middle—planning, executing, and tracking value capture.",
        "Our approach is operations-led. Diligence that tests the operating model, not just the numbers. Integration that runs through an IMO with clear ownership and milestones. Separation that anticipates stranded costs and keeps the business investable. We work in the language of deals: deal thesis, synergy model, Day One, TSA, clean room, 100-day plan.",
        "Where many advisors stop at decks, we focus on execution discipline and value capture. We help clients close the gap between the story in the data room and the reality in the first year. That means rigor up front and accountability after close.",
      ]}
      cta="Ready to execute your next transaction?"
    />
  );
}
