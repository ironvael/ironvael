import { db } from "./db";
import {
  contactMessages,
  capabilities,
  industries,
  type ContactMessageRequest,
  type ContactMessageResponse,
  type Capability,
  type Industry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: ContactMessageRequest): Promise<ContactMessageResponse>;
  
  getCapabilities(): Promise<Capability[]>;
  getCapabilityBySlug(slug: string): Promise<Capability | undefined>;
  
  getIndustries(): Promise<Industry[]>;
  getIndustryBySlug(slug: string): Promise<Industry | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: ContactMessageRequest): Promise<ContactMessageResponse> {
    const [created] = await db.insert(contactMessages)
      .values(message)
      .returning();
    return created;
  }

  async getCapabilities(): Promise<Capability[]> {
    return await db.select().from(capabilities);
  }

  async getCapabilityBySlug(slug: string): Promise<Capability | undefined> {
    const [capability] = await db.select().from(capabilities).where(eq(capabilities.slug, slug));
    return capability;
  }

  async getIndustries(): Promise<Industry[]> {
    return await db.select().from(industries);
  }

  async getIndustryBySlug(slug: string): Promise<Industry | undefined> {
    const [industry] = await db.select().from(industries).where(eq(industries.slug, slug));
    return industry;
  }
}

export const storage = new DatabaseStorage();
