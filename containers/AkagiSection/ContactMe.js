import styled from 'styled-components'
import GeneralInput from 'components/GeneralInput'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
`

const InputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 12px;
`

const ContactInput = (props) => (
  <InputWrapper>
    <GeneralInput {...props} />
  </InputWrapper>
)

const SubmitButton = styled.button`

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
      placeholder={'Who are you and how did we meet? Why are we keeping in touch?'}
      rows={5}
      name={'message'}
    />
    <SubmitButton form={formId}>
      Submit
    </SubmitButton>
  </FormWrapper>
)

export default ContactMe
