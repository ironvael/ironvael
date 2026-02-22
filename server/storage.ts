import { db } from "./db";
import {
  contactMessages,
  type ContactMessageRequest,
  type ContactMessageResponse
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: ContactMessageRequest): Promise<ContactMessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: ContactMessageRequest): Promise<ContactMessageResponse> {
    const [created] = await db.insert(contactMessages)
      .values(message)
      .returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
