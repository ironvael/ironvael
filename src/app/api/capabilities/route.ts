import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { storage } from "@/lib/storage";

export async function GET() {
  const list = await storage.getCapabilities();
  return NextResponse.json(list);
}
