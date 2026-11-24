import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@/lib/mdx/mdx-components";

// Next.js picks this file up by convention and applies it to every .mdx import.
export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
