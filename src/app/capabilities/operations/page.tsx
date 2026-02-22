import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Truck, ShoppingCart, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Operations | Ironvael",
  description:
    "Supply chain, procurement, and manufacturing excellence to drive efficiency, resilience, and sustainable cost advantage.",
  openGraph: {
    title: "Operations | Ironvael",
    description:
      "Supply chain, procurement, and manufacturing excellence to drive efficiency, resilience, and sustainable cost advantage.",
  },
};

export default function OperationsPage() {
  return (
    <CapabilityPageLayout
      title="Operations"
      description="Supply chain, procurement, and manufacturing excellence to drive efficiency, resilience, and sustainable cost advantage."
      highlights={[
        {
          icon: Truck,
          title: "Supply Chain",
          desc: "Network optimization, inventory management, and logistics excellence for agility and cost reduction.",
        },
        {
          icon: ShoppingCart,
          title: "Procurement",
          desc: "Strategic sourcing, supplier management, and spend optimization to capture lasting savings.",
        },
        {
          icon: Factory,
          title: "Manufacturing Excellence",
          desc: "Lean operations, quality improvement, and capacity optimization to boost productivity.",
        },
      ]}
      body={[
        "Operations excellence is where strategy meets execution. We help clients build supply chains and operating models that are both efficient and resilient—reducing cost while improving responsiveness to disruption and demand volatility.",
        "Our operations practice works across the value chain, from raw materials to customer delivery. We combine deep functional expertise with analytics and implementation rigor to deliver measurable, sustained results. Whether the goal is 15% procurement savings or a complete supply chain redesign, we bring the discipline to make it stick.",
        "In an era of geopolitical risk, climate pressure, and supply concentration, resilience is no longer optional. We help organizations stress-test their operations, diversify critical suppliers, and build the visibility and agility to adapt when the unexpected happens.",
      ]}
      cta="Ready to optimize your operations?"
    />
  );
}
