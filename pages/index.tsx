import React from 'react';
import AppContainer from 'containers/AppContainer';
import HomeHero from 'components/HomeHero';

export default class Home extends React.Component {
  render() {
    return (
      <AppContainer>
        <HomeHero />
      </AppContainer>
    );
  }
}
