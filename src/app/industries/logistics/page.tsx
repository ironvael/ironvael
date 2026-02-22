import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Truck, Package, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics | Ironvael",
  description:
    "We help logistics providers navigate network optimization, digital adoption, and operational excellence in a rapidly evolving sector.",
  openGraph: {
    title: "Logistics | Ironvael",
    description:
      "We help logistics providers navigate network optimization, digital adoption, and operational excellence in a rapidly evolving sector.",
  },
};

export default function LogisticsPage() {
  return (
    <IndustryPageLayout
      title="Logistics"
      description="We help logistics providers navigate network optimization, digital adoption, and operational excellence in a rapidly evolving sector."
      highlights={[
        {
          icon: Truck,
          title: "Network & Operations",
          desc: "Distribution network design, fleet optimization, and last-mile delivery improvement for efficiency and cost.",
        },
        {
          icon: Package,
          title: "Warehousing & Fulfillment",
          desc: "DC strategy, inventory optimization, and fulfillment center design for speed and scalability.",
        },
        {
          icon: Cpu,
          title: "Digital & Technology",
          desc: "Logistics tech adoption, visibility platforms, and automation for the modern supply chain.",
        },
      ]}
      body={[
        "Logistics is at the center of e-commerce growth, supply chain resilience, and the shift to same-day and sustainable delivery. We partner with 3PLs, carriers, and logistics-led retailers to build strategies that improve service, reduce cost, and capture growth in an increasingly complex landscape.",
        "Our logistics practice brings deep expertise in network design, operations, and technology. We help clients optimize distribution footprints, adopt warehouse and transportation management systems, and build the digital capabilities needed for end-to-end visibility and agility.",
        "Whether the challenge is a cost transformation, a network redesign, or a strategic expansion, we bring the rigor to execute. We've helped clients improve margins, scale fulfillment operations, and navigate M&A—always with a focus on service levels and sustainable competitive advantage.",
      ]}
      cta="Ready to transform your logistics operations?"
    />
  );
}
