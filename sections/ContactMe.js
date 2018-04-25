import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import Form from 'components/Form'
import GeneralInput from 'components/GeneralInput'
import Button from 'components/Button'
import { red } from 'utils/colors'

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

@inject('store') @observer
export default class ContactMe extends React.Component {
  render() {
    const formId = 'contact-me'
    const contactForm = this.props.store.contactForm

    return (
      <ContactWrapper>
        <ContactSubtext>
          Let<Red>’</Red>s keep in touch<Red>!</Red>
        </ContactSubtext>
        <Form id={formId} onSubmit={contactForm.submitContactForm}>
          <GeneralInput
            form={formId}
            placeholder={'What’s your email? *'}
            name={'email'}
            type={'email'}
            required
          />
          <GeneralInput
            form={formId}
            type={'textarea'}
            placeholder={'What’s the context?'}
            rows={5}
            name={'message'}
          />
          <Button hoverAnimation={'pop'} width={'100%'} form={formId}>
            {contactForm.isLoading ? 'Sending...' : 'Send'}
          </Button>
        </Form>
      </ContactWrapper>
    )
  }
}
