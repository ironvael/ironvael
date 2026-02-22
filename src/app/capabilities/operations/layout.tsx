import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations | Ironvael",
  description:
    "Supply chain, procurement, manufacturing, and process—we help you see where you stand, fix what’s broken, and build an operating model that scales without the chaos.",
  openGraph: {
    title: "Operations | Ironvael",
    description:
      "Supply chain, procurement, manufacturing, and process—we help you see where you stand, fix what’s broken, and build an operating model that scales without the chaos.",
  },
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
