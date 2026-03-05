import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

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
    title: "Ironvael | Global Consulting Firm",
    description:
      "We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.",
    url: "/",
    siteName: SITE_NAME,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
