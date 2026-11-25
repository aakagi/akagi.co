import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: `next build` writes plain files to `out/` for Cloudflare Pages.
  output: "export",
  // Static export has no image optimization server.
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
