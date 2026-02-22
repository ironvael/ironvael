import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.capabilities.list.path, async (req, res) => {
    const list = await storage.getCapabilities();
    res.json(list);
  });

  app.get(api.capabilities.get.path, async (req, res) => {
    const item = await storage.getCapabilityBySlug(req.params.slug);
    if (!item) return res.status(404).json({ message: "Capability not found" });
    res.json(item);
  });

  app.get(api.industries.list.path, async (req, res) => {
    const list = await storage.getIndustries();
    res.json(list);
  });

  app.get(api.industries.get.path, async (req, res) => {
    const item = await storage.getIndustryBySlug(req.params.slug);
    if (!item) return res.status(404).json({ message: "Industry not found" });
    res.json(item);
  });

  // Seed data function
  async function seed() {
    const caps = await storage.getCapabilities();
    if (caps.length === 0) {
      const { db } = await import("./db");
      const { capabilities, industries } = await import("@shared/schema");
      await db.insert(capabilities).values([
        { slug: "strategic-planning", title: "Strategic Planning", description: "Long-term growth strategies.", content: "Detailed content about strategic planning...", icon: "Compass" },
        { slug: "digital-transformation", title: "Digital Transformation", description: "Modernizing your tech stack.", content: "Detailed content about digital transformation...", icon: "Cpu" }
      ]);
      await db.insert(industries).values([
        { slug: "finance", title: "Finance", description: "Banking and investment sectors.", content: "Detailed content about finance industry...", icon: "Building2" },
        { slug: "healthcare", title: "Healthcare", description: "Medical and pharma sectors.", content: "Detailed content about healthcare industry...", icon: "Stethoscope" }
      ]);
    }
  }
  seed();

  return httpServer;
}
