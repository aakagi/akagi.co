import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import AboutMe from 'sections/AboutMe'
import ContactForm from 'sections/ContactForm'
import LinksSection from 'sections/LinksSection'
import { profile, logo } from 'utils/images'

const HomeWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 48px 36px;
`

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin-bottom: 12px;
`

const BottomLogo = styled.img`
  margin-bottom: 48px;
  width: 100px;
  height: 100px;
`

const Links = styled(LinksSection)`
  padding-top: 60px;
  margin-bottom: 100px;
`

const Home = () => (
  <AppLayout>
    <HomeWrapper>
      <CenterImage>
        <ProfileImage
          src={profile}
        />
      </CenterImage>
      <AboutMe />
      <ContactForm />
      <Links />
      <CenterImage>
        <BottomLogo
          src={logo}
        />
      </CenterImage>
    </HomeWrapper>
  </AppLayout>
)

export default Home
