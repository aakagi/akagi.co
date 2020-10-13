import React from "react";
import Head from "next/head";

import Seo from "components/Seo";

import ProfilePhoto from 'components/ProfilePhoto'
import Bio from 'components/Bio'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto py-16 sm:px-0 px-8">
      <Seo title="Home · Alex Akagi" />

      <ProfilePhoto className="rounded-full" />

      <Bio className="py-16" />

      <img className="w-24 py-40" src="/akagi-logo.png" />

    </div>
  );
}
