import React from 'react';
import styled from 'styled-components';
import { red, redFill, white } from 'utils/colors';

interface Props {
  error?: string;
}

const InputWrapper = styled.div`
  width: 100%;
`;

const baseStyles = () => `
  border-color: ${red};
  width: 100%;
  padding: 6px 12px;
  border-width: 1px;
  outline: none;
  font-size: 12px;
  line-height: 1.7;
  border-radius: 20px;
`;

const InputStyles = styled.div`
  background-color: ${(props: { error?: string }) => props.error ? redFill : white};

  input {
    ${baseStyles()}
  }
`;

const InputError = styled.div`
  color: ${red};
  font-size: 10px;
  text-align: left;
  padding-left: 8px;
  height: 10px;
`;

const GeneralInput: React.SFC<Props & React.HTMLProps<HTMLInputElement>> = ({ error, ...props }) => (
  <InputWrapper>
    <InputStyles error={error}>
      <input {...props} />
    </InputStyles>
    <InputError>
      {error}
    </InputError>
  </InputWrapper>
);

export default GeneralInput;
