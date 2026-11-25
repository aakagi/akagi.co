# akagi.co

Personal site: [akagi.co](https://akagi.co).

Next.js (App Router), Tailwind CSS, and MDX, deployed to Cloudflare Pages with `@cloudflare/next-on-pages`.

## Develop

```bash
pnpm install
pnpm dev
```

## Scripts

| Script            | What it does                                |
| ----------------- | ------------------------------------------- |
| `pnpm dev`        | Dev server at http://localhost:3000         |
| `pnpm lint`       | ESLint                                      |
| `pnpm typecheck`  | TypeScript                                  |
| `pnpm format`     | Prettier (`format:check` to verify only)    |
| `pnpm build`      | Next.js production build                    |
| `pnpm preview`    | Build for Cloudflare Pages and run locally  |
| `pnpm wrangler`   | Build and deploy to Cloudflare Pages        |
| `pnpm cf-typegen` | Regenerate `env.d.ts` from `wrangler.jsonc` |

## Deploy

Every push to `main` deploys to production from CI (`.github/workflows/ci.yml`). It needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets. `pnpm wrangler` deploys by hand.

## Routes

- `/`: bio, from `src/modules/home/bio.mdx`
- `/count-days`: select days on a year calendar and count them
- `/location`: calendar embed; calendar importers get an ICS feed (`src/middleware.ts`)
