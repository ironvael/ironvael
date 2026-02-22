import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations | Ironvael",
  description:
    "We transform operational performance through rigorous analysis, disciplined execution, and enterprise-grade solutions that deliver lasting results.",
  openGraph: {
    title: "Operations | Ironvael",
    description:
      "We transform operational performance through rigorous analysis, disciplined execution, and enterprise-grade solutions that deliver lasting results.",
  },
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
