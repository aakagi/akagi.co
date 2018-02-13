import styled from 'styled-components'
import Form from 'components/Form'
import GeneralInput from 'components/GeneralInput'
import Button from 'components/Button'
import { black, red } from 'utils/colors'

const ContactWrapper = styled.div`
  margin-bottom: 36px;
  text-align: center;
`

const ContactSubtext = styled.h3`
  font-size 16px;
  padding: 24px 0;
`

const Red = styled.span`
  color: ${red};
`

const SubmitButton = Button.extend`
  width: 100%;
`

const ContactMe = ({ formId = 'contact-me', ...props }) => (
  <ContactWrapper>
    <ContactSubtext>
      Let<Red>’</Red>s keep in touch<Red>!</Red>
    </ContactSubtext>
    <Form id={formId} {...props}>
      <GeneralInput
        form={formId}
        placeholder={'What’s your email? *'}
        name={'email'}
        type={'email'}
        required
      />
      <GeneralInput
        form={formId}
        placeholder={'What’s your name? *'}
        name={'name'}
        required
      />
      <GeneralInput
        form={formId}
        type={'textarea'}
        placeholder={'What’s up?'}
        rows={5}
        name={'message'}
      />
      <SubmitButton form={formId}>
        Submit
      </SubmitButton>
    </Form>
  </ContactWrapper>
)

export default ContactMe
