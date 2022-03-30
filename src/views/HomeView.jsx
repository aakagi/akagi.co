import React from 'react'
import cx from 'classnames'
import Image from 'next/image'
import Bio from 'components/Bio.mdx'
import Footer from 'components/Footer'

function ProfilePhoto() {
  return (
    <Image
      alt="profile-pic"
      src="/profile.jpg"
      layout="intrinsic"
      width="420"
      height="420"
      className="rounded-full"
      priority
    />
  )
}

function Kanji() {
  return (
    <Image
      layout="intrinsic"
      width="96"
      height="96"
      src="/akagi-logo.png"
      alt="赤木"
      priority
    />
  )
}

function HomeLayout(props) {
  const { profilePhoto, bio, kanji, footer } = props
  return (
    <div
      className={cx(
        'w-full',
        'min-h-screen',
        'flex',
        'items-center',
        'justify-center',
      )}
    >
      <div className="w-full max-w-sm flex flex-col items-center px-8 lg:px-0">
        <div className={cx('mt-16 sm:mt-20')}>{profilePhoto}</div>
        <div className="w-full py-16">{bio}</div>
        <div className="w-24 py-32">{kanji}</div>
        <div className="py-16">{footer}</div>
      </div>
    </div>
  )
}

export default function HomeView() {
  return (
    <HomeLayout
      profilePhoto={<ProfilePhoto />}
      bio={<Bio />}
      kanji={<Kanji />}
      footer={<Footer />}
    />
  )
}
