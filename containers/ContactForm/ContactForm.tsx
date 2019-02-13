import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { red } from 'utils/colors';
// import { formToJson } from 'utils/rest';
// import animations from 'utils/animations';

interface Props {

}

interface State {
  isLoading: boolean;
}

const ContactWrapper = styled.div`

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const InputWrapper = styled(Input)`
  margin-bottom: 6px;
`;

const Button = styled.button`
  border: 1px solid ${red};
  padding: 6px;
  transform: perspective(1px) translateZ(0);
  border-radius: 20px;
  color: ${red};
  width: 100%;
`;

export default class ContactForm extends React.Component<Props, State> {
  state = {
    isLoading: false,
  };

  render() {
    const formId = 'contact-me'
    return (
      <ContactWrapper>
        <Form id={formId}>
          <InputWrapper
            placeholder={'Email? *'}
            name={'email'}
            type={'email'}
            required={true}
          />
          <InputWrapper
            placeholder={'Context?'}
            name={'message'}
          />
          <Button form={formId}>
            {this.state.isLoading ? '...' : '⇪'}
          </Button>
        </Form>
      </ContactWrapper>
    )
  }
}
