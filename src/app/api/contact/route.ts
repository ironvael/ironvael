import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { storage } from "@/lib/storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = api.contact.create.input.parse(body);
    const message = await storage.createContactMessage(input);
    return NextResponse.json(message, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        },
        { status: 400 }
      );
    }
    throw err;
  }
}
