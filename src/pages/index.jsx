import React from 'react'

import Seo from 'components/Seo'
import MDXProvider from 'providers/MDXProvider'
import HomeView from 'views/HomeView'
// import PrevHomeView from 'views/PrevHomeView'

export default function HomePage() {
  // return <PrevHomeView />
  return (
    <MDXProvider>
      <Seo title="Home · Alex Akagi" />

      <main>
        <HomeView />
      </main>
    </MDXProvider>
  )
}
