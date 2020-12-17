import React from 'react'

import MainLayout from 'layouts/MainLayout'

import Seo from 'components/Seo'
import Bio from 'components/Bio'
import ProfilePhoto from 'components/ProfilePhoto'

export default function HomePage() {
  return (
    <MainLayout>
      <Seo title="Life · Alex Akagi" />

      <ProfilePhoto className="rounded-full" />

      <Bio className="py-16" />

      <img className="w-24 py-40" src="/akagi-logo.png" />

    </MainLayout>
  )
}
