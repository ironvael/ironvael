export const INDUSTRY_CATEGORIES = [
  {
    label: "Industrial & Built Environment",
    items: ["agriculture", "manufacturing", "automotive", "construction", "logistics"],
  },
  {
    label: "Consumer & Services",
    items: ["consumer-goods", "healthcare", "technology", "retail", "travel", "real-estate", "education"],
  },
  {
    label: "Financial & Institutional",
    items: ["private-capital", "nonprofits", "public-sector"],
  },
] as const;

export const INDUSTRIES = [
  { slug: "agriculture", title: "Agriculture" },
  { slug: "education", title: "Education" },
  { slug: "manufacturing", title: "Manufacturing" },
  { slug: "automotive", title: "Automotive" },
  { slug: "consumer-goods", title: "Consumer Goods" },
  { slug: "construction", title: "Construction" },
  { slug: "healthcare", title: "Healthcare" },
  { slug: "private-capital", title: "Private Capital" },
  { slug: "nonprofits", title: "Nonprofits" },
  { slug: "public-sector", title: "Public Sector" },
  { slug: "real-estate", title: "Real Estate" },
  { slug: "retail", title: "Retail" },
  { slug: "technology", title: "Technology" },
  { slug: "travel", title: "Travel" },
  { slug: "logistics", title: "Logistics" },
] as const;
