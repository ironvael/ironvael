import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Package, BarChart2, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Consumer Goods | Ironvael",
  description:
    "We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth.",
  openGraph: {
    title: "Consumer Goods | Ironvael",
    description:
      "We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth.",
  },
};

export default function ConsumerGoodsPage() {
  return (
    <IndustryPageLayout
      title="Consumer Goods"
      description="We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth."
      highlights={[
        {
          icon: Package,
          title: "Brand & Portfolio Strategy",
          desc: "Brand positioning, portfolio optimization, and innovation pipelines for sustainable growth.",
        },
        {
          icon: BarChart2,
          title: "Retail & Channel Transformation",
          desc: "E-commerce acceleration, D2C strategy, and omnichannel distribution for the modern consumer.",
        },
        {
          icon: Leaf,
          title: "Sustainability & Purpose",
          desc: "ESG strategy, sustainable sourcing, and purpose-led branding for conscious consumers.",
        },
      ]}
      body={[
        "Consumer goods companies face shifting demand, channel fragmentation, and rising expectations around sustainability and transparency. We partner with CPG leaders to build strategies that grow brands, optimize portfolios, and capture value across traditional and digital channels.",
        "Our consumer goods practice combines category expertise with functional depth in marketing, sales, and supply chain. We help clients navigate pricing pressure, private label competition, and the shift to e-commerce and D2C—while building the capabilities needed to innovate and adapt at speed.",
        "Whether the focus is a brand turnaround, a category expansion, or a full transformation of the commercial model, we bring the rigor to execute. We've helped clients grow share, improve margins, and position for M&A—always with the consumer and the retail landscape at the center.",
      ]}
      cta="Ready to grow your consumer brands?"
    />
  );
}
