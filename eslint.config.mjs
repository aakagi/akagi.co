import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // .vercel is leftover output from the old next-on-pages build.
  globalIgnores([
    ".claude/**",
    ".next/**",
    ".vercel/**",
    ".wrangler/**",
    "out/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
