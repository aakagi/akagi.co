import React from 'react'
import MDXProvider from 'providers/MDXProvider'
import Seo from 'components/Seo'
import HomeView from 'views/HomeView'

export default function HomePage() {
  return (
    <MDXProvider>
      <Seo title="Home · Alex Akagi" />

      <main>
        <HomeView />
      </main>
    </MDXProvider>
  )
}
