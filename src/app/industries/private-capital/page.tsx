import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Landmark, TrendingUp, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Capital | Ironvael",
  description:
    "We help private equity, credit, and alternative asset managers navigate portfolio value creation, operational improvement, and firm strategy.",
  openGraph: {
    title: "Private Capital | Ironvael",
    description:
      "We help private equity, credit, and alternative asset managers navigate portfolio value creation, operational improvement, and firm strategy.",
  },
};

export default function PrivateCapitalPage() {
  return (
    <IndustryPageLayout
      title="Private Capital"
      description="We help private equity, credit, and alternative asset managers navigate portfolio value creation, operational improvement, and firm strategy."
      highlights={[
        {
          icon: Landmark,
          title: "Portfolio Value Creation",
          desc: "Operating partner support, 100-day plans, and value creation roadmaps for portfolio companies.",
        },
        {
          icon: TrendingUp,
          title: "Due Diligence & Sourcing",
          desc: "Commercial and operational diligence, deal thesis validation, and add-on strategy for sponsors.",
        },
        {
          icon: BarChart2,
          title: "Firm & Fund Strategy",
          desc: "GP strategy, fundraising support, and platform operations for private capital firms.",
        },
      ]}
      body={[
        "Private capital is deploying more capital than ever—and the bar for value creation is higher. We partner with private equity, credit, and growth investors to accelerate portfolio performance, deepen diligence, and build firm-level capabilities that drive returns.",
        "Our private capital practice works across the investment lifecycle. We support sponsors with commercial and operational diligence, post-close value creation plans, and hands-on operating support. We also help GPs with firm strategy, fundraising materials, and platform optimization.",
        "Whether the focus is a roll-up strategy, a turnaround at a portfolio company, or a fund-level initiative, we bring the rigor and speed that sponsors demand. We've helped clients improve EBITDA, execute integrations, and position for successful exits.",
      ]}
      cta="Ready to accelerate portfolio value?"
    />
  );
}
