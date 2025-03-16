"use client";

import { Kanji } from "@/modules/home/akagi-kanji";
import { Footer } from "@/modules/home/footer";
import Bio from "@/modules/home/bio.mdx";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col items-center px-8 lg:px-0">
        <div className="mt-16 sm:mt-20">
          <Image
            alt="profile-pic"
            src="/profile.jpg"
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
          <Kanji />
        </div>
        <div className="py-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
