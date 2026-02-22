import { Metadata } from "next";
import { CapabilityPageLayout } from "@/components/capability-page-layout";
import { Users, GitBranch, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Organization | Ironvael",
  description:
    "Talent strategy, organizational design, and culture change to build organizations that execute and adapt.",
  openGraph: {
    title: "Organization | Ironvael",
    description:
      "Talent strategy, organizational design, and culture change to build organizations that execute and adapt.",
  },
};

export default function OrganizationPage() {
  return (
    <CapabilityPageLayout
      title="Organization"
      description="Talent strategy, organizational design, and culture change to build organizations that execute and adapt."
      highlights={[
        {
          icon: Users,
          title: "Talent Strategy",
          desc: "Workforce planning, capability mapping, and talent acquisition to build the right teams for the future.",
        },
        {
          icon: GitBranch,
          title: "Organizational Design",
          desc: "Structure optimization, span of control, and role clarity to align organization with strategy.",
        },
        {
          icon: Heart,
          title: "Culture Change",
          desc: "Behavior change programs, leadership alignment, and engagement to embed new ways of working.",
        },
      ]}
      body={[
        "Strategy succeeds or fails in the organization. We help leaders design structures, build talent, and shape culture so that the organization can execute today's priorities while adapting to tomorrow's challenges.",
        "Our organization practice works across the full people agenda—from org design and workforce planning to leadership development and culture change. We combine data-driven diagnosis with practical implementation support, ensuring changes take root and deliver results.",
        "Transformation and strategy require people to think and act differently. We help clients align leadership, engage the broader organization, and build the capabilities that sustain change. The goal is an organization that is fit for purpose—and fit for the future.",
      ]}
      cta="Ready to build an organization that delivers?"
    />
  );
}
