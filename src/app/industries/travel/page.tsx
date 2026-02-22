import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Plane, Hotel, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel | Ironvael",
  description:
    "We help travel, hospitality, and tourism companies navigate recovery, digital transformation, and sustainable growth.",
  openGraph: {
    title: "Travel | Ironvael",
    description:
      "We help travel, hospitality, and tourism companies navigate recovery, digital transformation, and sustainable growth.",
  },
};

export default function TravelPage() {
  return (
    <IndustryPageLayout
      title="Travel"
      description="We help travel, hospitality, and tourism companies navigate recovery, digital transformation, and sustainable growth."
      highlights={[
        {
          icon: Plane,
          title: "Airlines & Aviation",
          desc: "Network strategy, fleet optimization, and loyalty program design for carriers and aviation services.",
        },
        {
          icon: Hotel,
          title: "Hospitality & Lodging",
          desc: "Brand strategy, property operations, and revenue management for hotels and vacation rental platforms.",
        },
        {
          icon: TrendingUp,
          title: "Tourism & Experiences",
          desc: "Destination strategy, experience design, and digital distribution for tours and attractions.",
        },
      ]}
      body={[
        "Travel has rebounded—but the industry is fundamentally changed. Leisure-led demand, bleisure, and sustainability expectations are reshaping how people move and stay. We partner with airlines, hotels, OTAs, and travel services to build strategies that capture growth and position for the next era.",
        "Our travel practice brings deep sector expertise across aviation, hospitality, and tourism. We help clients optimize networks and pricing, transform digital and distribution, improve operational efficiency, and navigate the shift to sustainable travel.",
        "Whether the challenge is a cost transformation, a strategic partnership, or a digital build-out, we bring the rigor to execute. We've helped clients improve margins, expand into new segments, and build the capabilities needed for the travel industry of tomorrow.",
      ]}
      cta="Ready to transform your travel business?"
    />
  );
}
