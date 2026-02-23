import type { Metadata, Viewport } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-dynamic";

const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": SITE_URL + "/#organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: SITE_URL + "/white-logo.png" } },
    { "@type": "WebSite", "@id": SITE_URL + "/#website", url: SITE_URL, name: SITE_NAME, publisher: { "@id": SITE_URL + "/#organization" } },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
import { QueryClientProviderWrapper } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ironvael.com"),
  title: {
    default: "Ironvael | Global Consulting Firm",
    template: "%s | Ironvael",
  },
  description:
    "We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.",
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }} />
      </head>
      <body>
        <QueryClientProviderWrapper>
          <TooltipProvider>
            <ScrollToTop />
            {children}
            <Toaster />
          </TooltipProvider>
        </QueryClientProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
