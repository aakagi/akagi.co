import React from 'react';
import styled from 'styled-components';
import { black } from 'utils/colors';

const FooterWrapper = styled.footer`
  margin: 1em;
  text-align: center;
  color: ${black};
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        {/*<span>&copy; Akagi.co</span>*/}
      </FooterWrapper>
    );
  }
}
