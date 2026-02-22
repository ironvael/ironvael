import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { storage } from "@/lib/storage";
import { db } from "@/lib/db";
import { capabilities, industries } from "@shared/schema";

export async function POST() {
  const caps = await storage.getCapabilities();
  if (caps.length === 0) {
    await db.insert(capabilities).values([
      {
        slug: "strategic-planning",
        title: "Strategic Planning",
        description: "Long-term growth strategies.",
        content: "Detailed content about strategic planning...",
        icon: "Compass",
      },
      {
        slug: "digital-transformation",
        title: "Digital Transformation",
        description: "Modernizing your tech stack.",
        content: "Detailed content about digital transformation...",
        icon: "Cpu",
      },
    ]);
    await db.insert(industries).values([
      {
        slug: "finance",
        title: "Finance",
        description: "Banking and investment sectors.",
        content: "Detailed content about finance industry...",
        icon: "Building2",
      },
      {
        slug: "healthcare",
        title: "Healthcare",
        description: "Medical and pharma sectors.",
        content: "Detailed content about healthcare industry...",
        icon: "Stethoscope",
      },
    ]);
  }
  return NextResponse.json({ seeded: true });
}
