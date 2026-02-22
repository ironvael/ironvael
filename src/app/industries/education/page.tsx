import { Metadata } from "next";
import { IndustryPageLayout } from "@/components/industry-page-layout";
import { GraduationCap, Laptop, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Education | Ironvael",
  description:
    "We help education institutions and EdTech companies navigate transformation, digital learning, and sustainable growth.",
  openGraph: {
    title: "Education | Ironvael",
    description:
      "We help education institutions and EdTech companies navigate transformation, digital learning, and sustainable growth.",
  },
};

export default function EducationPage() {
  return (
    <IndustryPageLayout
      title="Education"
      description="We help education institutions and EdTech companies navigate transformation, digital learning, and sustainable growth."
      highlights={[
        {
          icon: GraduationCap,
          title: "Strategy & Transformation",
          desc: "Institutional strategy, program portfolio optimization, and operational transformation for colleges and universities.",
        },
        {
          icon: Laptop,
          title: "Digital Learning & EdTech",
          desc: "Online learning strategy, technology adoption, and partnership models for the digital era.",
        },
        {
          icon: TrendingUp,
          title: "Growth & Sustainability",
          desc: "Enrollment strategy, revenue diversification, and financial sustainability for education providers.",
        },
      ]}
      body={[
        "Education is undergoing profound change—from demographic shifts and funding pressures to the rise of digital learning and alternative credentials. We partner with universities, K-12 systems, and EdTech companies to build strategies that deliver on mission while ensuring long-term sustainability.",
        "Our education practice brings deep sector expertise across higher education, workforce development, and corporate learning. We help clients optimize operations, adopt new delivery models, navigate regulatory and accreditation landscape, and position for growth in a competitive market.",
        "Whether the challenge is enrollment decline, digital transformation, or a strategic partnership or merger, we bring the rigor to execute. We've helped institutions improve margins, launch new programs, and build the capabilities needed for the future of learning.",
      ]}
      cta="Ready to transform your education organization?"
    />
  );
}
