import styled from 'styled-components'
import GeneralInput from 'components/GeneralInput'
import { black, red } from 'utils/colors'

// TODO: Move out of this component
import jsonFetch from 'lib/jsonFetch'
import formToJson from 'lib/formToJson'

const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  : 'http://localhost:4000'

// TODO: Move out of this component
function onSubmit(e) {
  e.preventDefault()
  const { elements, id: formId } = e.target

  // Generate the request body
  const body = formToJson(elements)
  jsonFetch('POST', `${API_BASE}/akagi-contact`, {
    body: body,
    mode: 'cors',
  })
  .then(({ error, message }) => {
    if (error) {
      return alert(error)
    } else {
      alert(message)
    }

    // Clear form
    document.getElementById(formId).reset()
  })
  .catch(err => {
    console.error('err', err)
    alert(err)
  })
}

const ContactWrapper = styled.div`
  margin-bottom: 36px;
`

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

  &:hover {
    border-color: ${red};
    color: ${red};
    cursor: pointer;
  }
`

const ContactMe = ({ formId = 'contact-me', ...props }) => (
  <ContactWrapper>
    <FormWrapper id={formId} onSubmit={onSubmit} {...props}>
      <ContactInput
        form={formId}
        placeholder={'What’s your email? *'}
        name={'email'}
        type={'email'}
        required
      />
      <ContactInput
        form={formId}
        placeholder={'What’s your name? *'}
        name={'name'}
        required
      />
      <ContactInput
        form={formId}
        type={'textarea'}
        placeholder={'What’s up?'}
        rows={5}
        name={'message'}
      />
      <SubmitButton form={formId}>
        Submit
      </SubmitButton>
    </FormWrapper>
  </ContactWrapper>
)

export default ContactMe
