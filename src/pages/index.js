import React from 'react'
import Image from 'next/image'
import MDXProvider from 'providers/MDXProvider'
import Seo from 'components/Seo'
import Bio from 'components/Bio.mdx'
import Footer from 'components/Footer'

export default function HomePage() {
  return (
    <MDXProvider>
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

        <div className="w-full py-16 text-left">
          <Bio />
        </div>

        <div className="w-24 py-40">
          <Image
            layout="intrinsic"
            width="96"
            height="96"
            src="/akagi-logo.png"
            alt="赤木"
            priority
          />
        </div>

        <div className="py-16">
          <Footer />
        </div>
      </main>
    </MDXProvider>
  )
}
