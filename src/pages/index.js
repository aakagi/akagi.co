import React from 'react'
import Image from 'next/image'

import Seo from 'components/Seo'
import Bio from 'components/Bio'

export default function HomePage() {
  return (
    <main className="main">
      <Seo title="Home · Alex Akagi" />

      <div className="mt-16 sm:mt-20">
        <Image
          src="/profile.jpg"
          layout="intrinsic"
          width="420"
          height="420"
          className="rounded-full"
          priority
        />
      </div>

      <Bio className="py-16" />

      <div className="w-24 py-40">
        <Image
          layout="intrinsic"
          width="96"
          height="96"
          src="/akagi-logo.png"
        />
      </div>

    </main>
  )
}
