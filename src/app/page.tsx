"use client";

import { Footer } from "@/modules/home/footer";
import Bio from "@/modules/home/bio.mdx";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center px-8 lg:px-0">
        <div className="mt-16 sm:mt-20">
          <Image
            alt="Profile picture"
            src="/profile-420x420.webp"
            width="420"
            height="420"
            className="rounded-full"
            priority
          />
        </div>
        <div className="w-full py-16">
          <Bio />
        </div>
        <div className="w-24 py-32">
          <Image width="96" height="96" src="/akagi-kanji-96x96.webp" alt="赤木" priority />
        </div>
        <div className="py-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
