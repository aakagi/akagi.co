import React from 'react';
import styled from 'styled-components';
import { Provider as MobxProvider } from 'mobx-react'
import Navbar from 'components/Navbar';
import GlobalStyle from 'components/GlobalStyle';
import Footer from 'components/Footer';
import ModalStore from 'store/ModalStore';
import LoginForm from 'containers/LoginForm';

const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex: 1;
`;

export default class AppLayout extends React.Component {
  store = {
    loginModal: new ModalStore(),
  };

  render() {
    return (
      <MobxProvider loginModal={this.store.loginModal}>
        <AppLayoutWrapper>
          <GlobalStyle />
          <Navbar
            onLoginClick={this.store.loginModal.openModal}
          />
          <Body>
            {this.props.children}
          </Body>
          <Footer />
          <LoginForm />
        </AppLayoutWrapper>
      </MobxProvider>
    );
  }
}
