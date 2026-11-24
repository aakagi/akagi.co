import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to
// use bindings during local development (when running the application with
// `next dev`). For more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  setupDevPlatform().catch(console.error);
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
