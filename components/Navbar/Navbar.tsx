import React from 'react';
import styled from 'styled-components';
import { blackNav, white, blueNav, redNav } from 'utils/colors';
import Link from 'next/link';

interface Props {
  onLoginClick: () => void;
}

const NavbarWrapper = styled.div`
  height: 64px;
`;

const NavFixed = styled.div`
  align-items: center;
  background-color: ${blackNav};
  color: ${white};
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  height: 64px;
  padding: 0 48px;
  position: fixed;
  width: 100%;
`;

const RightContainer = styled.div `
  margin-left: auto;
  align-items: center;
`;

const Logo = styled.a`
  color: ${blueNav};
  cursor: pointer;
  font-size: 1.7em;
  font-weight: 700;
`;

const LinkAnchor = styled.a`
  color: ${blueNav};
  cursor: pointer;

  :hover {
    color: ${redNav};
  }
`;

export default class Navbar extends React.Component<Props> {
  render() {
    return (
      <NavbarWrapper>
        <NavFixed>
          <Link href={'/'}>
            <Logo>
              AKAGI
            </Logo>
          </Link>
          <RightContainer>
            <Link href={'/sxsw'}>
              <LinkAnchor>
                Link
              </LinkAnchor>
            </Link>
            {/*<Link onClick={this.props.onLoginClick}>
              Log in
            </Link>*/}
          </RightContainer>
        </NavFixed>
      </NavbarWrapper>
    );
  }
}
