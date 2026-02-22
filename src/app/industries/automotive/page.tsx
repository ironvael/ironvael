import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Car, Zap, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Automotive | Ironvael",
  description:
    "We help automotive OEMs and suppliers navigate the shift to electrification, software-defined vehicles, and new mobility models.",
  openGraph: {
    title: "Automotive | Ironvael",
    description:
      "We help automotive OEMs and suppliers navigate the shift to electrification, software-defined vehicles, and new mobility models.",
  },
};

export default function AutomotivePage() {
  return (
    <IndustryPageLayout
      title="Automotive"
      description="We help automotive OEMs and suppliers navigate the shift to electrification, software-defined vehicles, and new mobility models."
      highlights={[
        {
          icon: Zap,
          title: "Electrification & EV",
          desc: "Battery strategy, charging infrastructure, and supply chain transformation for the electric transition.",
        },
        {
          icon: Gauge,
          title: "Software-Defined Vehicles",
          desc: "Connected car architecture, over-the-air updates, and software-led product development.",
        },
        {
          icon: Car,
          title: "Mobility & Business Model",
          desc: "New revenue streams, mobility-as-a-service, and adapting to shifting ownership patterns.",
        },
      ]}
      body={[
        "The automotive industry is undergoing its most significant transformation in a century. Electrification, autonomy, and software are redefining vehicles and business models alike. We partner with OEMs, suppliers, and new entrants to navigate this transition—from strategy through execution.",
        "Our automotive practice brings deep sector expertise across the value chain. We help clients optimize product portfolios for the EV era, redesign supply chains for battery and semiconductor complexity, and build the software and digital capabilities required for the vehicles of tomorrow.",
        "Whether the challenge is a cost transformation, a strategic pivot, or an M&A integration, we bring the rigor that the industry demands. We've supported clients through product launches, plant rationalizations, and the carve-out of legacy businesses—always with a focus on sustainable competitive advantage.",
      ]}
      cta="Ready to accelerate your automotive strategy?"
    />
  );
}
