import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Cpu, TrendingUp, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology | Ironvael",
  description:
    "We help technology companies navigate growth strategy, go-to-market optimization, and operational scale.",
  openGraph: {
    title: "Technology | Ironvael",
    description:
      "We help technology companies navigate growth strategy, go-to-market optimization, and operational scale.",
  },
};

export default function TechnologyPage() {
  return (
    <IndustryPageLayout
      title="Technology"
      description="We help technology companies navigate growth strategy, go-to-market optimization, and operational scale."
      highlights={[
        {
          icon: Cpu,
          title: "Product & Strategy",
          desc: "Product strategy, pricing optimization, and competitive positioning for software and tech businesses.",
        },
        {
          icon: TrendingUp,
          title: "Go-to-Market & Scale",
          desc: "GTM strategy, sales productivity, and channel optimization for high-growth tech companies.",
        },
        {
          icon: Zap,
          title: "Operations & M&A",
          desc: "Operating model design, M&A integration, and carve-out strategy for tech consolidators.",
        },
      ]}
      body={[
        "Technology companies move at speed—but growth and competitive pressure demand strategic clarity. We partner with software, SaaS, and tech-enabled businesses to build strategies that scale, optimize go-to-market, and position for the next chapter of growth.",
        "Our technology practice brings deep sector expertise across B2B and B2C tech. We help clients refine product strategy, improve sales efficiency, optimize unit economics, and navigate M&A and integration—all with the agility the industry demands.",
        "Whether the challenge is product-market fit, scaling the sales engine, or integrating an acquisition, we bring the rigor to execute. We've helped clients accelerate growth, improve margins, and build the operating models needed for sustainable scale.",
      ]}
      cta="Ready to accelerate your tech growth?"
    />
  );
}
