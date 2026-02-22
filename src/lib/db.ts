import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

const connectionString =
  process.env.DATABASE_URL || "postgresql://localhost:5432/placeholder";

const globalForDb = globalThis as unknown as { pool: pg.Pool };

export const pool =
  globalForDb.pool || new Pool({ connectionString });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export const db = drizzle(pool, { schema });
