import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { HardHat, TrendingUp, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction | Ironvael",
  description:
    "We help construction and engineering firms navigate digital adoption, operational excellence, and sustainable growth.",
  openGraph: {
    title: "Construction | Ironvael",
    description:
      "We help construction and engineering firms navigate digital adoption, operational excellence, and sustainable growth.",
  },
};

export default function ConstructionPage() {
  return (
    <IndustryPageLayout
      title="Construction"
      description="We help construction and engineering firms navigate digital adoption, operational excellence, and sustainable growth."
      highlights={[
        {
          icon: HardHat,
          title: "Operations & Project Excellence",
          desc: "Project delivery optimization, subcontractor management, and margin improvement across the project lifecycle.",
        },
        {
          icon: TrendingUp,
          title: "Strategy & Growth",
          desc: "Market positioning, M&A strategy, and geographic or segment expansion for contractors and builders.",
        },
        {
          icon: Leaf,
          title: "Sustainability & Modern Methods",
          desc: "Decarbonization, offsite and modular construction, and ESG strategy for the built environment.",
        },
      ]}
      body={[
        "Construction faces labor shortages, supply chain volatility, and pressure to adopt digital tools and sustainable practices. We partner with general contractors, specialty trade firms, and engineering companies to build strategies that improve delivery, protect margins, and position for long-term growth.",
        "Our construction practice brings deep sector expertise across commercial, infrastructure, and residential building. We help clients optimize bid processes, strengthen project controls, adopt BIM and construction tech, and navigate the shift to prefabrication and sustainable materials.",
        "Whether the challenge is a cost transformation, a strategic pivot, or an M&A integration, we bring the rigor to execute. We've helped clients improve project margins, enter new segments, and build the capabilities needed for the construction industry of tomorrow.",
      ]}
      cta="Ready to build a stronger construction business?"
    />
  );
}
