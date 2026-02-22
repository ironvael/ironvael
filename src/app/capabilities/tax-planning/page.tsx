import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Calculator, Building2, ArrowRightLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Planning | Ironvael",
  description:
    "Corporate tax strategy, M&A structuring, and tax-efficient entity design to optimize cash flow and preserve value.",
  openGraph: {
    title: "Tax Planning | Ironvael",
    description:
      "Corporate tax strategy, M&A structuring, and tax-efficient entity design to optimize cash flow and preserve value.",
  },
};

export default function TaxPlanningPage() {
  return (
    <CapabilityPageLayout
      title="Tax Planning"
      description="Corporate tax strategy, M&A structuring, and tax-efficient entity design to optimize cash flow and preserve value."
      highlights={[
        {
          icon: Calculator,
          title: "Corporate Tax Strategy",
          desc: "Effective tax rate optimization, credit utilization, and strategic tax position management.",
        },
        {
          icon: Building2,
          title: "M&A Tax Structuring",
          desc: "Deal tax analysis, acquisition structuring, and post-deal integration planning to maximize after-tax value.",
        },
        {
          icon: ArrowRightLeft,
          title: "Tax-Efficient Entity Design",
          desc: "Jurisdictional planning, holding structure optimization, and transfer pricing alignment.",
        },
      ]}
      body={[
        "Tax is a major driver of cash flow and value—yet many organizations treat it as a compliance function rather than a strategic lever. We help clients integrate tax into strategy, M&A, and operating decisions to preserve value and accelerate cash.",
        "Our tax planning practice works alongside CFOs and deal teams to model tax outcomes, identify optimization opportunities, and structure transactions for after-tax efficiency. From acquisition structuring to entity consolidation, we bring the rigor to ensure tax supports—rather than constrains—strategic objectives.",
        "In an era of increasing tax transparency and evolving global rules, proactive planning is essential. We help clients navigate complexity, capture available incentives, and build structures that are both tax-efficient and defensible in the long run.",
      ]}
      cta="Ready to optimize your tax position?"
    />
  );
}
