import React from 'react';
import styled from 'styled-components';
import AppContainer from 'containers/AppContainer';
import Bio from 'components/Bio';
// import ContactForm from 'containers/ContactForm';
import LinksSection from 'containers/LinksSection';
import { profile, logo } from 'utils/images'

const HomeWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 36px;
`;

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  margin-bottom: 12px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 60px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <AppContainer>
        <HomeWrapper>
          <CenterImage>
            <ProfileImage src={profile} />
          </CenterImage>
          <Bio />
          {/* <ContactForm /> */}
          <LinksSection />
          <CenterImage>
            <LogoImage src={logo} />
          </CenterImage>
        </HomeWrapper>
      </AppContainer>
    );
  }
}
