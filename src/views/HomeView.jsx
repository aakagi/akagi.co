import React from 'react'
import cx from 'classnames'

import Bio from 'components/Bio.mdx'
import Footer from 'components/Footer'
import Image from 'next/image'

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
        'flex',
        'flex-col',
        'items-center',
        'max-w-sm',
        'mx-auto',
        'px-8 lg:px-0',
      )}
    >
      <div className={cx('mt-16 sm:mt-20')}>{profilePhoto}</div>
      <div className="w-full py-16 text-left">{bio}</div>
      <div className="w-24 py-32">{kanji}</div>
      <div className="py-16">{footer}</div>
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
