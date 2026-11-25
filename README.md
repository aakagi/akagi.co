# akagi.co

Personal site: [akagi.co](https://akagi.co).

Next.js (App Router), Tailwind CSS, and MDX, built as a static export and deployed to Cloudflare Pages.

## Develop

```bash
pnpm install
pnpm dev
```

## Scripts

| Script           | What it does                              |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Dev server at http://localhost:3000       |
| `pnpm lint`      | ESLint                                    |
| `pnpm typecheck` | TypeScript                                |
| `pnpm format`    | Prettier (`format:check` to verify only)  |
| `pnpm build`     | Build the static site into `out/`         |
| `pnpm preview`   | Build and run locally as Cloudflare Pages |
| `pnpm dep`       | Build and deploy to Cloudflare Pages      |

## Routes

- `/`: bio, from `src/modules/home/bio.mdx`
- `/count-days`: select days on a year calendar and count them
- `/location`: calendar embed; calendar importers get an ICS feed (`functions/location.ts`, a Pages Function)
