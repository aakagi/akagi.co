import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import AkagiTitle from 'sections/AkagiTitle'
import ContactMe from 'sections/ContactMe'
import LinksSection from 'sections/LinksSection'

const Home = () => (
  <AppLayout>
    <SeoHead />
    <AkagiTitle />
    <ContactMe />
    <LinksSection />
  </AppLayout>
)

export default Home
