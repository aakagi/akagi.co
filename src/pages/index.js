import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import MainLayout from 'layouts/MainLayout'

import Seo from 'components/Seo'
import Bio from 'components/Bio'
import ProfilePhoto from 'components/ProfilePhoto'

export default function HomePage() {
  return (
    <MainLayout>
      <Seo title="Home · Alex Akagi" />

      <ProfilePhoto
        className={cx(
          'mt-16',
          'sm:mt-20',
          'rounded-full',
        )}
      />

      <Bio className="py-16" />

      <img className="w-24 py-40" src="/akagi-logo.png" />

    </MainLayout>
  )
}
