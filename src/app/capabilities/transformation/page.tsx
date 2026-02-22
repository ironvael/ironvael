import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { TrendingUp, RefreshCw, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Transformation | Ironvael",
  description:
    "We guide organizations through turnarounds, restructuring, and holistic performance improvement to unlock value and build sustainable results.",
  openGraph: {
    title: "Transformation | Ironvael",
    description:
      "We guide organizations through turnarounds, restructuring, and holistic performance improvement to unlock value and build sustainable results.",
  },
};

export default function TransformationPage() {
  return (
    <CapabilityPageLayout
      title="Transformation"
      description="We guide organizations through turnarounds, restructuring, and holistic performance improvement to unlock value and build sustainable results."
      highlights={[
        {
          icon: TrendingUp,
          title: "Turnarounds",
          desc: "Rapid performance improvement, cost reduction, and operational fixes for underperforming businesses.",
        },
        {
          icon: RefreshCw,
          title: "Restructuring",
          desc: "Organization design, carve-outs, and post-merger integration to capture synergies.",
        },
        {
          icon: Zap,
          title: "Performance Improvement",
          desc: "End-to-end optimization across operations, procurement, and margin expansion.",
        },
      ]}
      body={[
        "When organizations face pressure—whether from market disruption, underperformance, or a major transaction—transformation requires more than incremental change. We partner with leadership to execute rapid, measurable improvements while building capabilities that last.",
        "Our transformation practice combines speed with rigor. We identify quick wins to build momentum while designing the structural changes needed for sustained performance. From cost reduction programs to full-scale integrations, we bring the discipline and experience to deliver on commitments.",
        "Every transformation is unique, but our approach is consistent: diagnose with precision, design for impact, and execute with accountability. We stand alongside our clients through the hardest chapters, ensuring the organization emerges stronger on the other side.",
      ]}
      cta="Ready to transform your organization?"
    />
  );
}
