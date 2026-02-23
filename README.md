# Ironvael Operations - Next.js

A global consulting firm website built with Next.js 14, React, Tailwind CSS, and Drizzle ORM.

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- `DATABASE_URL` environment variable

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database

The app uses Drizzle ORM with PostgreSQL. Set your `DATABASE_URL` and run:

```bash
npm run db:push
```

To seed initial data (capabilities & industries), run once after setup:

```bash
curl -X POST http://localhost:3000/api/seed
```

### Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components (Navbar, Footer, UI components)
- `src/lib/` - Database, storage, utilities
- `shared/` - Shared schema and types (Drizzle, Zod)

## Migrated from Replit

This project was converted from a Replit (Express + Vite + React) setup to Next.js. The original structure is preserved in `client/`, `server/`, and `script/` for reference and can be removed when no longer needed.
