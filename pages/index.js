import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import AboutMe from 'sections/AboutMe'
import ContactForm from 'sections/ContactForm'
import LinksSection from 'sections/LinksSection'
import StreamBlog from 'sections/StreamBlog'
import { profile, logo } from 'utils/images'

const HomeWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 36px;
`

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  margin-top: 48px;
  margin-bottom: 12px;
`

const BottomLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 60px;
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
    <StreamBlog />
  </AppLayout>
)

export default Home
