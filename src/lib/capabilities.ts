export const CAPABILITY_CATEGORIES = [
  {
    label: "Strategy & Transactions",
    items: ["strategy", "transformation", "ma", "entity-formation"],
  },
  {
    label: "Operations & Commercial",
    items: ["operations", "organization", "marketing-sales"],
  },
  {
    label: "Digital, Finance & ESG",
    items: ["digital-ai", "tax-planning", "sustainability"],
  },
] as const;

export const CAPABILITIES = [
  {
    slug: "strategy",
    title: "Strategy",
    description:
      "Corporate strategy, business unit strategy, and value creation planning.",
  },
  {
    slug: "transformation",
    title: "Transformation",
    description:
      "Turnarounds, restructuring, and holistic performance improvement.",
  },
  {
    slug: "digital-ai",
    title: "Digital & AI",
    description:
      "Digital strategy, AI implementation, and technology modernization.",
  },
  {
    slug: "ma",
    title: "M&A",
    description: "Due diligence, merger integration, and divestitures.",
  },
  {
    slug: "entity-formation",
    title: "Entity Formation",
    description: "Corporate structure design, venture setup, and legal entity optimization.",
  },
  {
    slug: "operations",
    title: "Operations",
    description:
      "Supply chain, procurement, and manufacturing excellence.",
  },
  {
    slug: "organization",
    title: "Organization",
    description:
      "Talent strategy, organizational design, and culture change.",
  },
  {
    slug: "marketing-sales",
    title: "Marketing & Sales",
    description:
      "Customer insights, pricing strategy, and sales force effectiveness.",
  },
  {
    slug: "sustainability",
    title: "Sustainability",
    description: "ESG strategy, decarbonization, and sustainable operations.",
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    description: "Corporate tax strategy, M&A structuring, and tax-efficient entity design.",
  },
] as const;
