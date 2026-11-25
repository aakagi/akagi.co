import type { Metadata } from "next";
import "./globals.css";

import { PropsWithChildren } from "react";

const description = "Welcome to my website!";

export const metadata: Metadata = {
  title: "Akagi",
  description,
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://akagi.co"),
  openGraph: {
    title: "Akagi.co",
    description,
    url: "https://akagi.co",
    siteName: "Akagi.co",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://akagi.co/akagi-kanji.webp",
        width: 1024,
        height: 1024,
        alt: "Akagi.co Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@akagi____",
    creator: "@akagi____",
    title: "Akagi.co",
    description,
    images: ["https://akagi.co/akagi-kanji.webp"],
  },
  alternates: {
    canonical: "https://akagi.co",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
