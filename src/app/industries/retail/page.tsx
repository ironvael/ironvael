import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Store, ShoppingBag, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail | Ironvael",
  description:
    "We help retailers navigate omnichannel transformation, operational excellence, and sustainable growth in a rapidly evolving sector.",
  openGraph: {
    title: "Retail | Ironvael",
    description:
      "We help retailers navigate omnichannel transformation, operational excellence, and sustainable growth in a rapidly evolving sector.",
  },
};

export default function RetailPage() {
  return (
    <IndustryPageLayout
      title="Retail"
      description="We help retailers navigate omnichannel transformation, operational excellence, and sustainable growth in a rapidly evolving sector."
      highlights={[
        {
          icon: Store,
          title: "Omnichannel & E-Commerce",
          desc: "Digital strategy, channel integration, and seamless customer experience across stores and online.",
        },
        {
          icon: ShoppingBag,
          title: "Merchandising & Assortment",
          desc: "Assortment optimization, pricing strategy, and private label development for margin and differentiation.",
        },
        {
          icon: TrendingUp,
          title: "Operations & Transformation",
          desc: "Store optimization, supply chain efficiency, and cost transformation for sustainable profitability.",
        },
      ]}
      body={[
        "Retail is reshaping around omnichannel, convenience, and experience. We partner with brick-and-mortar retailers, D2C brands, and retail-led marketplaces to build strategies that grow revenue, improve margins, and position for the future of shopping.",
        "Our retail practice brings deep sector expertise across specialty, grocery, and general merchandise. We help clients optimize store portfolios, accelerate e-commerce, transform supply chains, and adopt the technology and analytics needed to compete in a digital-first world.",
        "Whether the challenge is a turnaround, an omnichannel build-out, or a strategic merger, we bring the rigor to execute. We've helped clients improve same-store sales, reduce costs, and build the capabilities needed for the retail landscape of tomorrow.",
      ]}
      cta="Ready to transform your retail business?"
    />
  );
}
