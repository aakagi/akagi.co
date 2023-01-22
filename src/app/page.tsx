import classNames from 'classnames'
import Image from 'next/image'
import { mdxComponents } from '../components/mdx'
import Bio from './bio.mdx'
import { Footer } from './footer'

const ProfilePhoto = () => {
  return (
    <Image
      alt="profile-pic"
      src="/profile.jpg"
      width="420"
      height="420"
      className="rounded-full"
      priority
    />
  )
}

const Kanji = () => {
  return (
    <Image width="96" height="96" src="/akagi-logo.png" alt="赤木" priority />
  )
}

export default function HomePage() {
  return (
    <div
      className={classNames(
        'w-full',
        'min-h-screen',
        'flex',
        'items-center',
        'justify-center',
      )}
    >
      <div className="w-full max-w-sm flex flex-col items-center px-8 lg:px-0">
        <div className={classNames('mt-16 sm:mt-20')}>
          <ProfilePhoto />
        </div>
        <div className="w-full py-16">
          <Bio components={mdxComponents} />
        </div>
        <div className="w-24 py-32">
          <Kanji />
        </div>
        <div className="py-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}
