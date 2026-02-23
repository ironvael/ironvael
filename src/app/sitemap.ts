import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const staticPaths = [
  "",
  "/about",
  "/capabilities",
  "/capabilities/ma",
  "/capabilities/operations",
  "/capabilities/tax-planning",
  "/capabilities/entity-structuring",
  "/capabilities/organization",
  "/capabilities/marketing-sales",
  "/capabilities/strategy",
  "/capabilities/digital-ai",
  "/capabilities/transformation",
  "/careers",
  "/contact",
  "/services",
  "/privacy",
  "/terms",
  "/cookies",
  "/industries",
  "/industries/education",
  "/industries/consumer-goods",
  "/industries/construction",
  "/industries/automotive",
  "/industries/travel",
  "/industries/agriculture",
  "/industries/nonprofits",
  "/industries/healthcare",
  "/industries/logistics",
  "/industries/technology",
  "/industries/retail",
  "/industries/private-capital",
  "/industries/real-estate",
  "/industries/manufacturing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  return staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
