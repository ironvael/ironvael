import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Goods | Ironvael",
  description:
    "We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth.",
  openGraph: {
    title: "Consumer Goods | Ironvael",
    description:
      "We help CPG and consumer goods companies navigate brand strategy, retail transformation, and sustainable growth.",
  },
};

export default function ConsumerGoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
