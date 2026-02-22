import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { BarChart2, Tag, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing & Sales | Ironvael",
  description:
    "Customer insights, pricing strategy, and sales force effectiveness to grow revenue and deepen market position.",
  openGraph: {
    title: "Marketing & Sales | Ironvael",
    description:
      "Customer insights, pricing strategy, and sales force effectiveness to grow revenue and deepen market position.",
  },
};

export default function MarketingSalesPage() {
  return (
    <CapabilityPageLayout
      title="Marketing & Sales"
      description="Customer insights, pricing strategy, and sales force effectiveness to grow revenue and deepen market position."
      highlights={[
        {
          icon: BarChart2,
          title: "Customer Insights",
          desc: "Segment analysis, voice of customer, and demand drivers to inform strategy and targeting.",
        },
        {
          icon: Tag,
          title: "Pricing Strategy",
          desc: "Value-based pricing, price architecture, and discount governance to capture full margin potential.",
        },
        {
          icon: Target,
          title: "Sales Force Effectiveness",
          desc: "Territory design, incentive alignment, and sales productivity to accelerate top-line growth.",
        },
      ]}
      body={[
        "Revenue growth comes from understanding customers and aligning the commercial engine to capture value. We help B2B and B2C organizations sharpen their marketing and sales capabilities—from strategy through execution—to drive sustainable top-line performance.",
        "Our marketing and sales practice combines analytics with commercial intuition. We mine customer data to uncover growth opportunities, design pricing structures that reflect value, and reshape go-to-market models for higher productivity. The focus is always on measurable impact—incremental revenue, margin improvement, and market share gains.",
        "Whether the challenge is penetrating new segments, defending against price pressure, or transforming a legacy sales organization, we bring rigor to the full commercial agenda. The goal is a marketing and sales function that not only generates leads but converts them into lasting, profitable relationships.",
      ]}
      cta="Ready to grow your commercial performance?"
    />
  );
}
