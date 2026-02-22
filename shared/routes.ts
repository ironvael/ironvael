import { z } from 'zod';
import { insertContactMessageSchema, contactMessages, capabilities, industries } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: insertContactMessageSchema,
      responses: {
        201: z.custom<typeof contactMessages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  capabilities: {
    list: {
      method: 'GET' as const,
      path: '/api/capabilities' as const,
      responses: {
        200: z.array(z.custom<typeof capabilities.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/capabilities/:slug' as const,
      responses: {
        200: z.custom<typeof capabilities.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  industries: {
    list: {
      method: 'GET' as const,
      path: '/api/industries' as const,
      responses: {
        200: z.array(z.custom<typeof industries.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/industries/:slug' as const,
      responses: {
        200: z.custom<typeof industries.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ContactInput = z.infer<typeof api.contact.create.input>;
export type ContactResponse = z.infer<typeof api.contact.create.responses[201]>;

export type CapabilityResponse = z.infer<typeof api.capabilities.get.responses[200]>;
export type IndustryResponse = z.infer<typeof api.industries.get.responses[200]>;
