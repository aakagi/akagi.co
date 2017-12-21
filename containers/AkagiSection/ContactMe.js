import styled from 'styled-components'
import GeneralInput from 'components/GeneralInput'
import { black } from 'utils/colors'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  max-width: 500px;
`

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`

const ContactInput = (props) => (
  <InputWrapper>
    <GeneralInput {...props} />
  </InputWrapper>
)

const SubmitButton = styled.button`
  width: 100%;
  border: 1px solid ${black};
  padding: 6px;
`

const ContactMe = ({ formId = 'contact-me', ...props }) => (
  <FormWrapper id={formId} {...props}>
    <ContactInput
      form={formId}
      placeholder={'What is your email? *'}
      name={'email'}
      type={'email'}
      required
    />
    <ContactInput
      form={formId}
      type={'textarea'}
      placeholder={'Who are you?\nHow did we meet?\nWhy keep in touch?'}
      rows={5}
      name={'message'}
    />
    <SubmitButton form={formId}>
      Submit
    </SubmitButton>
  </FormWrapper>
)

export default ContactMe
