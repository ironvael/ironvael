import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Leaf, Droplets, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Agriculture | Ironvael",
  description:
    "We help agricultural businesses and agribusinesses navigate sustainability, technology adoption, and value chain optimization.",
  openGraph: {
    title: "Agriculture | Ironvael",
    description:
      "We help agricultural businesses and agribusinesses navigate sustainability, technology adoption, and value chain optimization.",
  },
};

export default function AgriculturePage() {
  return (
    <IndustryPageLayout
      title="Agriculture"
      description="We help agricultural businesses and agribusinesses navigate sustainability, technology adoption, and value chain optimization."
      highlights={[
        {
          icon: Leaf,
          title: "Sustainability & ESG",
          desc: "Regenerative practices, carbon reduction, and supply chain traceability for the ag sector.",
        },
        {
          icon: Droplets,
          title: "Precision & Technology",
          desc: "AgTech adoption, data-driven farming, and digital tools for productivity and efficiency.",
        },
        {
          icon: TrendingUp,
          title: "Value Chain Optimization",
          desc: "Farm-to-consumer strategy, processing optimization, and market access for growers and processors.",
        },
      ]}
      body={[
        "Agriculture faces a dual challenge: feeding a growing population while reducing environmental impact. We partner with growers, cooperatives, processors, and agribusinesses to build strategies that balance productivity, profitability, and sustainability.",
        "Our agriculture practice works across the food and ag value chain. We help clients optimize operations, adopt precision and digital technologies, navigate regulatory and consumer demands, and position for consolidation and growth. From farm economics to downstream processing, we bring the rigor to drive results.",
        "Whether the focus is a cost transformation, a sustainability roadmap, or a strategic partnership or M&A, we bring sector-specific expertise alongside functional depth. We've helped clients improve margins, enter new markets, and build the capabilities needed for the agriculture of tomorrow.",
      ]}
      cta="Ready to grow your agribusiness?"
    />
  );
}
