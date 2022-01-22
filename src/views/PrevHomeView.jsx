import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MDXProvider from 'providers/MDXProvider'
import Seo from 'components/Seo'
import Bio from 'components/Bio.mdx'
import Footer from 'components/Footer'

function WeeklyPostItem(props) {
  const weekNumber = 1
  return (
    <div>
      <h6>Week {weekNumber}</h6>
    </div>
  )
}

const postTitles = [
  'Attempting to Become Prolific',
  'Attempting to Establish Good Habits',
  'Enjoyable Goals',
  'Historical Record',
  'Adventuring More',
  'The Man in the Arena',
]

export default function HomePage() {
  return (
    <MDXProvider>
      <main className="main">
        <Seo title="Home · Alex Akagi" />

        <div className="mt-16 sm:mt-20">
          <Image
            alt="profile-pic"
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

        <div className="w-full pb-16 text-left">
          <h4 className="text-gray-500 font-medium mb-3 text-sm">
            I‘m Attempting to Write Weekly:
          </h4>
          {postTitles.reverse().map((postTitle, index) => (
            <div className="flex items-end" key={`post-${index}`}>
              <div className="text-gray-500 text-sm mr-3 " style={{ minWidth: '3rem' }}>
                Week {postTitles.length - index}
              </div>
              <Link href={`/week-${postTitles.length - index}`}>
                <a className="text-red-700 underline">{postTitle}</a>
              </Link>
            </div>
          ))}
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
      </main>
    </MDXProvider>
  )
}
