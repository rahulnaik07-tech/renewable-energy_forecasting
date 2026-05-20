# EnergyPulse

Global renewable energy forecasting and analytics platform tracking solar, wind, hydro, biomass, and geothermal capacity across all countries with 10-year forward forecasts.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/energy-forecast run dev` — run the frontend (port 21511)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + shadcn/ui + Recharts + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/countries.ts` — Countries table
- `lib/db/src/schema/energy_records.ts` — Energy data table (by country, source, year)
- `artifacts/api-server/src/routes/countries.ts` — Country endpoints
- `artifacts/api-server/src/routes/energy.ts` — Energy data, forecast, stats endpoints
- `artifacts/energy-forecast/src/` — React frontend
- `artifacts/energy-forecast/src/lib/format.ts` — Formatting utilities (formatNumber, formatGw, getFlagEmoji, etc.)

## Architecture decisions

- Contract-first: OpenAPI spec → codegen generates React Query hooks and Zod schemas
- Forecasts are computed server-side using per-source growth rates (solar 22%/yr, wind 11%/yr, etc.)
- Energy records stored by country+source+year for flexible aggregation
- Dark-theme UI with deep navy + electric green accent palette

## Product

- **Dashboard** (`/`) — Global stats, source breakdown chart, top countries leaderboard
- **Countries** (`/countries`) — Searchable, filterable grid of all tracked countries
- **Country Detail** (`/countries/:code`) — Per-country energy profile, historical trends, 10-year forecast
- **Forecast** (`/forecast`) — Global 10-year forward projections by source
- **Rankings** (`/rankings`) — Leaderboards by capacity, generation, growth rate
- **Trends** (`/trends`) — Historical year-over-year global renewable growth

## User preferences

_Populate as you build._

## Gotchas

- After OpenAPI spec changes, always run `pnpm --filter @workspace/api-spec run codegen`
- API server must be rebuilt (restart workflow) after route changes
- Forecast endpoint has no `years` query param (removed to avoid Orval TS2308 collision)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
