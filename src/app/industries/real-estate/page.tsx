import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Building2, TrendingUp, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate | Ironvael",
  description:
    "We help real estate owners, operators, and investors navigate strategy, operations, and value creation across property types.",
  openGraph: {
    title: "Real Estate | Ironvael",
    description:
      "We help real estate owners, operators, and investors navigate strategy, operations, and value creation across property types.",
  },
};

export default function RealEstatePage() {
  return (
    <IndustryPageLayout
      title="Real Estate"
      description="We help real estate owners, operators, and investors navigate strategy, operations, and value creation across property types."
      highlights={[
        {
          icon: Building2,
          title: "Portfolio & Asset Strategy",
          desc: "Portfolio optimization, asset repositioning, and capital allocation for owners and investors.",
        },
        {
          icon: TrendingUp,
          title: "Operations & Value Creation",
          desc: "Property management optimization, leasing strategy, and operational improvement for CRE and residential.",
        },
        {
          icon: Leaf,
          title: "Sustainability & PropTech",
          desc: "Decarbonization, sustainability certifications, and technology adoption for the built environment.",
        },
      ]}
      body={[
        "Real estate is navigating a fundamental shift—from interest rates and cap rates to the future of office, the rise of PropTech, and the urgency of sustainability. We partner with owners, operators, and investors to build strategies that create value and position for the evolving landscape.",
        "Our real estate practice brings deep expertise across commercial, residential, and alternative property types. We help clients optimize portfolios, improve operational performance, navigate financing and capital structure, and integrate sustainability into asset strategy.",
        "Whether the challenge is a portfolio review, an operational turnaround, or a strategic pivot, we bring the rigor to execute. We've helped clients improve NOI, reposition assets, and build the capabilities needed for the real estate market of tomorrow.",
      ]}
      cta="Ready to unlock value in your portfolio?"
    />
  );
}
