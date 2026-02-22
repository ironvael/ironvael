import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Building2, FileCheck, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Entity Formation | Ironvael",
  description:
    "Corporate structure design, venture setup, and legal entity optimization for growth, tax efficiency, and operational clarity.",
  openGraph: {
    title: "Entity Formation | Ironvael",
    description:
      "Corporate structure design, venture setup, and legal entity optimization for growth, tax efficiency, and operational clarity.",
  },
};

export default function EntityFormationPage() {
  return (
    <CapabilityPageLayout
      title="Entity Formation"
      description="Corporate structure design, venture setup, and legal entity optimization for growth, tax efficiency, and operational clarity."
      highlights={[
        {
          icon: Building2,
          title: "Corporate Structure Design",
          desc: "Holding company architecture, subsidiary optimization, and structure simplification for clarity and efficiency.",
        },
        {
          icon: FileCheck,
          title: "Venture Setup",
          desc: "New entity formation, JV structuring, and startup incorporation to launch ventures with the right foundation.",
        },
        {
          icon: Network,
          title: "Legal Entity Optimization",
          desc: "Entity consolidation, jurisdictional alignment, and governance frameworks to reduce complexity and risk.",
        },
      ]}
      body={[
        "The right structure unlocks growth; the wrong one creates friction, tax leakage, and operational confusion. We help organizations design and implement entity structures that support strategy—whether launching a new venture, spinning off a division, or simplifying a complex global portfolio.",
        "Our entity formation practice combines structural design with operational reality. We work alongside legal and tax advisors to ensure structures are not only legally sound but practically executable—with clear governance, defined service relationships, and manageable compliance burdens.",
        "From carve-out entities ready for sale to new platforms built for acquisition, we bring the rigor to get structures right from day one. The goal is a clean, scalable foundation that supports the business—not one that constrains it.",
      ]}
      cta="Ready to structure your next venture?"
    />
  );
}
