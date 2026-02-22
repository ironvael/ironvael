import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Heart, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nonprofits | Ironvael",
  description:
    "We help nonprofit organizations navigate strategy, operational excellence, and sustainable impact at scale.",
  openGraph: {
    title: "Nonprofits | Ironvael",
    description:
      "We help nonprofit organizations navigate strategy, operational excellence, and sustainable impact at scale.",
  },
};

export default function NonprofitsPage() {
  return (
    <IndustryPageLayout
      title="Nonprofits"
      description="We help nonprofit organizations navigate strategy, operational excellence, and sustainable impact at scale."
      highlights={[
        {
          icon: Heart,
          title: "Mission & Strategy",
          desc: "Strategic planning, program portfolio optimization, and theory of change development for lasting impact.",
        },
        {
          icon: TrendingUp,
          title: "Revenue & Sustainability",
          desc: "Fundraising strategy, earned revenue models, and financial sustainability for long-term viability.",
        },
        {
          icon: Users,
          title: "Operations & Talent",
          desc: "Operational effectiveness, talent strategy, and organizational design for mission-driven teams.",
        },
      ]}
      body={[
        "Nonprofits face pressure to do more with less—while donors and funders demand greater accountability and impact. We partner with foundations, associations, and direct-service organizations to build strategies that advance mission, strengthen operations, and ensure sustainable growth.",
        "Our nonprofit practice brings deep sector expertise alongside functional rigor. We help clients optimize program portfolios, design fundraising and earned revenue strategies, improve operational efficiency, and build the organizational capabilities needed to scale impact.",
        "Whether the focus is a strategic plan, a revenue transformation, or an operational turnaround, we bring the discipline that the sector deserves. We've helped clients increase fundraising yield, reduce overhead, and position for the next chapter of growth—always with mission at the center.",
      ]}
      cta="Ready to amplify your impact?"
    />
  );
}
