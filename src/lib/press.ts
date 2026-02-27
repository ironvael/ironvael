export type PressRelease = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  summary: string;
  body: string[];
};

export const PRESS_RELEASES: PressRelease[] = [
  {
    slug: "formal-launch-2026",
    title: "Ironvael Advisory Formally Launches as a Nationwide Institutional Consulting Firm",
    date: "2026-02-27",
    displayDate: "February 27, 2026",
    summary:
      "Ironvael Advisory formally launches as a nationwide institutional consulting firm focused on operational infrastructure, strategic restructuring, and long-term enterprise resilience.",
      body: [
        "Ironvael Advisory today announced its formal launch as a nationwide business consulting and institutional advisory firm focused on operational infrastructure, strategic restructuring, and long-term enterprise value creation.",
        
        "Founded to address the gap between rapid company formation and sustainable institutional structure, the firm partners with organizations across multiple industries to design durable operating systems, optimize performance, and restore order in complex environments.",
        
        "Ironvael Advisory provides services spanning operational efficiency, digitization initiatives, compliance recovery, entity structuring in coordination with client counsel and CPAs, mergers and acquisitions advisory, and enterprise-scale process design. Engagements are offered through both project-based and long-term retainer models.",
        
        "The firm was established on the principle that growth without structure creates fragility. While many organizations scale revenue, few build the operational architecture required to withstand complexity, regulatory pressure, and long-term expansion. Ironvael focuses on the systems beneath the surface — governance frameworks, financial clarity, operational discipline, and execution infrastructure that holds under stress.",
        
        "Ironvael Advisory works with founders, middle-market leadership teams, and institutional stakeholders navigating inflection points: periods of rapid scaling, operational breakdown, compliance exposure, restructuring, or strategic transition. The firm’s advisory model prioritizes clarity over noise and disciplined execution over theoretical frameworks.",
        
        "Unlike traditional consulting structures that emphasize abstract strategy divorced from implementation, Ironvael operates at the intersection of strategic foresight and hands-on execution. Engagements are designed to produce measurable structural improvement — not presentations.",
        
        "“Revenue creates momentum. Structure creates permanence,” said Aiden Hovren, Founder and CEO of Ironvael. “We built Ironvael to engineer the systems that allow leadership teams to scale with clarity, discipline, and durability.”",
        
        "Headquartered in Montana with nationwide reach, Ironvael Advisory maintains a selective client model to ensure engagement-level focus and institutional standards across all advisory work.",
        
        "The firm is now accepting select client engagements."
      ]
  }
];

const bySlug = new Map(PRESS_RELEASES.map((r) => [r.slug, r]));

export function getPressReleaseBySlug(slug: string): PressRelease | undefined {
  return bySlug.get(slug);
}

export function getAllPressReleaseSlugs(): string[] {
  return PRESS_RELEASES.map((r) => r.slug);
}

export const SORTED_PRESS_RELEASES = [...PRESS_RELEASES].sort((a, b) =>
  a.date < b.date ? 1 : -1
);
