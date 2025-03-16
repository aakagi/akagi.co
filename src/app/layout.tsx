import type { Metadata } from "next";
import "./globals.css";

import { MdxProvider } from "@/lib/mdx/mdx-components";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Akagi",
  description: "Welcome to my website!",

  metadataBase: new URL("https://akagi.co"),
  openGraph: {
    title: "Akagi.co",
    description: "Your description here",
    url: "https://akagi.co",
    siteName: "Akagi.co",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://akagi.co/akagi-kanji.png",
        width: 652,
        height: 652,
        alt: "Akagi.co Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@akagi____",
    creator: "@akagi____",
    title: "Akagi.co",
    description: "Your description here",
    images: ["https://akagi.co/akagi-kanji.png"],
  },
  alternates: {
    canonical: "https://akagi.co",
  },
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <MdxProvider>
      <html lang="en">
        <head></head>
        <body>{children}</body>
      </html>
    </MdxProvider>
  );
}
