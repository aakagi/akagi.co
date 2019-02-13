import React from 'react';
import styled from 'styled-components';
import { white } from 'utils/colors';

const HomeHeroWrapper = styled.div`
  background-size: cover;
  background-position: center center;
  height: 20rem;
  display: flex;
`;

const Title = styled.h1`
  margin: auto;
  // color: ${white};
  font-size: 4.5em;
`;

export default class HomeHero extends React.Component {
  render() {
    return (
      <HomeHeroWrapper>
        <Title>
          Title
        </Title>
      </HomeHeroWrapper>
    );
  }
}
