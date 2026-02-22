import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { Factory, Cpu, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing | Ironvael",
  description:
    "We help manufacturing clients navigate digital transformation, operational excellence, and sustainable growth in a rapidly evolving sector.",
  openGraph: {
    title: "Manufacturing | Ironvael",
    description:
      "We help manufacturing clients navigate digital transformation, operational excellence, and sustainable growth in a rapidly evolving sector.",
  },
};

export default function ManufacturingPage() {
  return (
    <IndustryPageLayout
      title="Manufacturing"
      description="We help manufacturing clients navigate digital transformation, operational excellence, and sustainable growth in a rapidly evolving sector."
      highlights={[
        {
          icon: Factory,
          title: "Operational Excellence",
          desc: "Lean manufacturing, supply chain optimization, and productivity improvement across the factory floor.",
        },
        {
          icon: Cpu,
          title: "Industry 4.0 & Digital",
          desc: "Smart factory implementation, automation, and connected operations for the modern plant.",
        },
        {
          icon: TrendingUp,
          title: "Growth & Transformation",
          desc: "Market expansion, new product introduction, and M&A integration for manufacturers.",
        },
      ]}
      body={[
        "Manufacturing is under pressure from every direction—shifting demand, supply chain disruption, labor constraints, and the urgent need to decarbonize. We partner with manufacturing leaders to build resilient operations, adopt digital and automation technologies, and capture growth in new markets.",
        "Our manufacturing practice combines deep sector experience with functional expertise in operations, procurement, and technology. We help clients from discrete manufacturing to process industries optimize their footprint, modernize their plants, and transform their supply chains for agility and cost efficiency.",
        "Whether the challenge is a turnaround, a major capital project, or a strategic pivot, we bring the rigor to execute. We've helped manufacturers reduce costs by 20%+, accelerate time-to-market for new products, and navigate complex integrations and carve-outs.",
      ]}
      cta="Ready to transform your manufacturing operations?"
    />
  );
}
