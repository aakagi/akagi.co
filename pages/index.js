import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import AkagiLogo from 'components/AkagiLogo'
import ContactMe from 'sections/ContactMe'
import LinksSection from 'sections/LinksSection'

const TopLogo = styled(AkagiLogo)`
  margin: 24px 0px 12px;
`

const BottomLogo = styled(AkagiLogo)`
  margin-bottom: 48px;
`

const Home = () => (
  <AppLayout>
    <SeoHead />
    <TopLogo />
    <ContactMe />
    <LinksSection />
    <BottomLogo />
  </AppLayout>
)

export default Home
