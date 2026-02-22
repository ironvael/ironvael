import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Search, GitMerge, Split } from "lucide-react";

export const metadata: Metadata = {
  title: "M&A | Ironvael",
  description:
    "Due diligence, merger integration, and divestitures to capture value and manage complexity in every transaction.",
  openGraph: {
    title: "M&A | Ironvael",
    description:
      "Due diligence, merger integration, and divestitures to capture value and manage complexity in every transaction.",
  },
};

export default function MAPage() {
  return (
    <CapabilityPageLayout
      title="M&A"
      description="Due diligence, merger integration, and divestitures to capture value and manage complexity in every transaction."
      highlights={[
        {
          icon: Search,
          title: "Due Diligence",
          desc: "Commercial, operational, and synergy diligence to validate value and surface risks before close.",
        },
        {
          icon: GitMerge,
          title: "Merger Integration",
          desc: "Integration planning, Day One readiness, and 100-day execution to capture synergies and protect value.",
        },
        {
          icon: Split,
          title: "Divestitures",
          desc: "Carve-out strategy, separation planning, and seller-side diligence for clean, value-maximizing exits.",
        },
      ]}
      body={[
        "M&A creates or destroys value at speed. We help acquirers and sellers navigate every phase of the deal—from strategic rationale and due diligence through integration or separation—with rigor that protects value and accelerates outcomes.",
        "Our M&A practice combines transaction experience with operational depth. We go beyond financial analysis to assess commercial sustainability, integration complexity, and culture fit. The result is diligence that surfaces the real risks and integration plans that deliver on the deal thesis.",
        "Whether you're buying, selling, or carving out a business unit, we bring the discipline to execute flawlessly. We've guided clients through integrations spanning dozens of countries and divestitures of assets worth billions—always with a focus on minimizing disruption and maximizing value.",
      ]}
      cta="Ready to execute your next transaction?"
    />
  );
}
