import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const capabilities = pgTable("capabilities", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  icon: text("icon"),
});

export const industries = pgTable("industries", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  icon: text("icon"),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true }).extend({
  email: z.string().email("Please enter a valid email address"),
});

export const insertCapabilitySchema = createInsertSchema(capabilities).omit({ id: true });
export const insertIndustrySchema = createInsertSchema(industries).omit({ id: true });

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type Capability = typeof capabilities.$inferSelect;
export type Industry = typeof industries.$inferSelect;

export type ContactMessageRequest = InsertContactMessage;
export type ContactMessageResponse = ContactMessage;
