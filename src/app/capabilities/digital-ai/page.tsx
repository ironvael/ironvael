import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Cpu, Brain, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital & AI | Ironvael",
  description:
    "Digital strategy, AI implementation, and technology modernization to accelerate innovation and competitive advantage.",
  openGraph: {
    title: "Digital & AI | Ironvael",
    description:
      "Digital strategy, AI implementation, and technology modernization to accelerate innovation and competitive advantage.",
  },
};

export default function DigitalAIPage() {
  return (
    <CapabilityPageLayout
      title="Digital & AI"
      description="Digital strategy, AI implementation, and technology modernization to accelerate innovation and competitive advantage."
      highlights={[
        {
          icon: Cpu,
          title: "Digital Strategy",
          desc: "Enterprise digital roadmaps, digital maturity assessment, and technology-enabled business model design.",
        },
        {
          icon: Brain,
          title: "AI Implementation",
          desc: "Generative AI use cases, data foundation enablement, and responsible AI governance frameworks.",
        },
        {
          icon: Sparkles,
          title: "Technology Modernization",
          desc: "Cloud migration, platform architecture, and legacy system transformation.",
        },
      ]}
      body={[
        "The intersection of digital and AI is reshaping every industry. We help organizations move beyond experimentation to scaled, measurable impact—deploying technology that drives revenue, reduces cost, and creates lasting competitive moats.",
        "Our approach balances ambition with pragmatism. We prioritize use cases that deliver near-term value while building the data, talent, and infrastructure needed for long-term AI leadership. From generative AI pilots to full-scale digital transformations, we ensure every initiative is anchored in business outcomes.",
        "Technology alone is not the answer. We partner with clients to align digital and AI investments with strategy, embed new capabilities into operations, and build the organizational muscle to keep innovating. The goal is not just adoption—it's sustained advantage.",
      ]}
      cta="Ready to accelerate your digital future?"
    />
  );
}
