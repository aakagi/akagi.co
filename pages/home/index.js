import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import AkagiTitle from './AkagiTitle'
import ContactMe from './ContactMe'
import LinksSection from './LinksSection'

const AkagiSection = () => (
  <AppLayout>
    <SeoHead />
    <AkagiTitle />
    <ContactMe />
    <LinksSection />
  </AppLayout>
)

export default AkagiSection
