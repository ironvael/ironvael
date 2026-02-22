import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations | Ironvael",
  description:
    "Supply chain, procurement, and manufacturing excellence to drive efficiency, resilience, and sustainable cost advantage.",
  openGraph: {
    title: "Operations | Ironvael",
    description:
      "Supply chain, procurement, and manufacturing excellence to drive efficiency, resilience, and sustainable cost advantage.",
  },
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
