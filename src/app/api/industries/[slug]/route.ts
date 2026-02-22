import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { storage } from "@/lib/storage";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const item = await storage.getIndustryBySlug(slug);
  if (!item) return NextResponse.json({ message: "Industry not found" }, { status: 404 });
  return NextResponse.json(item);
}
