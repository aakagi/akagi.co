import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { red } from 'utils/colors';
import { api, jsonHeaders } from 'utils/rest';

interface Props {

}

interface State {
  email: string;
  message: string;
}

const ContactWrapper = styled.div`

`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const InputWrapper = styled(Input)`
  margin-bottom: 6px;
`;

const Button = styled.button`
  border: 1px solid ${red};
  border-radius: 20px;
  color: ${red};
  cursor: pointer;
  padding: 6px;
  transform: perspective(1px) translateZ(0);
  width: 100%;
`;

export default class ContactForm extends React.Component<Props, State> {
  isLoading = false;

  defaultState = {
    email: '',
    message: '',
  };

  state = this.defaultState;

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Temporarily disabled');
    return; //temporarily disable
    this.isLoading = true;

    fetch(api.CONTACT_FORM, {
      method: 'POST',
      ...jsonHeaders,
      body: JSON.stringify(this.state),
    })
    .then(resBody => resBody.json())
    .then(({ error, message }) => {
      if (error) {
        return alert(error);
      } else if (message) {
        alert(message);
      }
      this.setState(this.defaultState)
      this.isLoading = false;
    })
    .catch((err: string) => {
      console.error('err', err);
      alert(err);
      this.isLoading = false;
    });
  }

  render() {
    const formId = 'contact-akagi';
    return (
      <ContactWrapper>
        <Form id={formId} onSubmit={this.handleSubmit}>
          <InputWrapper
            placeholder={'Email? *'}
            name={'email'}
            type={'email'}
            required={true}
            value={this.state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ email: e.target.value as string })
            }}
          />
          <InputWrapper
            placeholder={'Message?'}
            name={'message'}
            value={this.state.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ message: e.target.value as string })
            }}
          />
          <Button form={formId}>
            {this.isLoading ? '...' : '⇪'}
          </Button>
        </Form>
      </ContactWrapper>
    )
  }
}
