import { inject, observer } from 'mobx-react'
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Modal from 'react-modal';
import { ModalInterface } from 'store/ModalStore';

interface InjectedProps {
  loginModal: ModalInterface;
}

const FreezeBackground = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

const customStyles = {
  overlay: {
    position: 'fixed',
    height: '100%',
    overflow: 'scroll',
  },
  content : {
    margin: '64px auto',
    maxWidth: '568px',
    padding: '30px',
    minHeight: '30rem',
    maxHeight: '50rem',
    position: 'absolute',
    overflow: 'auto',
  },
};

const Input = styled.input`
  width: 100%;
  border: 1px silver solid;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2.6rem;
  padding-left: 0.7em;
  padding-right: 0.7em;
`;

@inject('loginModal')
@observer
export default class LoginForm extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const loginModal = this.injected.loginModal;
    return (
      <Modal
        ariaHideApp={false}
        isOpen={loginModal.isOpen}
        onRequestClose={loginModal.closeModal}
        style={customStyles}
      >
        {loginModal.isOpen && <FreezeBackground />}
        <Input
          placeholder={'Email'}
        />
        <Input
          placeholder={'Password'}
        />
      </Modal>
    );
  }
}
