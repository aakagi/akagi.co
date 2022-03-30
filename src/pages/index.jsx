import Seo from 'components/Seo'
import MDXProvider from 'providers/MDXProvider'
import HomeView from 'views/HomeView'

export default function HomePage() {
  return (
    <MDXProvider>
      <Seo title="Home · Alex Akagi" />
      <HomeView />
    </MDXProvider>
  )
}
