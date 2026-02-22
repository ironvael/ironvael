import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { ArrowRight, BarChart3, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategy | Ironvael",
  description:
    "We help leadership teams define winning strategies that deliver lasting competitive advantage and sustainable growth.",
  openGraph: {
    title: "Strategy | Ironvael",
    description:
      "We help leadership teams define winning strategies that deliver lasting competitive advantage and sustainable growth.",
  },
};

export default function StrategyPage() {
  return (
    <CapabilityPageLayout
      title="Strategy"
      description="We help leadership teams define winning strategies that deliver lasting competitive advantage and sustainable growth."
      highlights={[
        {
          icon: Target,
          title: "Corporate Strategy",
          desc: "Portfolio optimization, growth strategy, and strategic planning at the enterprise level.",
        },
        {
          icon: BarChart3,
          title: "Business Unit Strategy",
          desc: "Market positioning, competitive analysis, and go-to-market strategy for business units.",
        },
        {
          icon: Lightbulb,
          title: "Value Creation",
          desc: "Value creation plans, carve-out strategy, and full potential roadmaps.",
        },
      ]}
      body={[
        "In an era of constant disruption, strategy is no longer a one-time exercise. We partner with boards and C-suite executives to build adaptive strategies that can pivot as markets shift.",
        "Our approach combines rigorous analysis with deep industry expertise. We challenge assumptions, stress-test scenarios, and design strategies that are both ambitious and executable.",
        "Whether you're navigating a market entry, defending against new competitors, or preparing for a transformational M&A, our strategy practice brings the clarity and conviction needed to act decisively.",
      ]}
      cta="Ready to redefine your strategy?"
    />
  );
}
