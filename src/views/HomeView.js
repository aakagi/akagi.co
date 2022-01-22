


import React from 'react'


import Bio from 'components/Bio.mdx'
import Footer from 'components/Footer'
import Image from 'next/image'





export default function HomeView() {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto px-8">
      <div className="mt-16 sm:mt-20">
        <Image
          alt='profile-pic'



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

      <div className="w-24 py-32">
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
    </div>
  )
}
