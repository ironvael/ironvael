import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Stethoscope, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare | Ironvael",
  description:
    "We help healthcare providers, payers, and services organizations navigate transformation, value-based care, and sustainable growth.",
  openGraph: {
    title: "Healthcare | Ironvael",
    description:
      "We help healthcare providers, payers, and services organizations navigate transformation, value-based care, and sustainable growth.",
  },
};

export default function HealthcarePage() {
  return (
    <IndustryPageLayout
      title="Healthcare"
      description="We help healthcare providers, payers, and services organizations navigate transformation, value-based care, and sustainable growth."
      highlights={[
        {
          icon: Stethoscope,
          title: "Provider Strategy & Operations",
          desc: "Clinical operations, care model redesign, and hospital system optimization for better outcomes and efficiency.",
        },
        {
          icon: Heart,
          title: "Value-Based Care & Population Health",
          desc: "VBC strategy, risk-based contracting, and population health management for payers and providers.",
        },
        {
          icon: TrendingUp,
          title: "Growth & Transformation",
          desc: "Market strategy, M&A integration, and digital health adoption for the evolving healthcare landscape.",
        },
      ]}
      body={[
        "Healthcare is under pressure from cost, access, and quality demands. We partner with health systems, payers, and healthcare services companies to build strategies that improve patient outcomes while advancing operational and financial performance.",
        "Our healthcare practice brings deep sector expertise across providers, payers, and life sciences. We help clients optimize operations, transition to value-based models, navigate regulatory change, and position for consolidation and growth in a rapidly evolving industry.",
        "Whether the challenge is a turnaround, a strategic partnership, or a digital transformation, we bring the rigor to execute. We've helped clients reduce costs, improve quality metrics, and build the capabilities needed for the healthcare system of tomorrow.",
      ]}
      cta="Ready to transform healthcare delivery?"
    />
  );
}
