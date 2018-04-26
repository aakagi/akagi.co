import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import Form from 'components/Form'
import GeneralInput from 'components/GeneralInput'
import Button from 'components/Button'
import { red } from 'utils/colors'

const ContactWrapper = styled.div`
  text-align: center;
`

const AkagiHeader = styled.h1`
  font-size: 48px;
  padding: 24px 0;
  line-height: 12px;
`

const Red = styled.span`
  color: ${red};
  line-height: inherit;
`

const ContactSubtext = styled.h3`
  font-size 16px;
  line-height: 12px;
  padding: 24px 0;
`

@inject('store') @observer
export default class ContactMe extends React.Component {
  render() {
    const formId = 'contact-me'
    const contactForm = this.props.store.contactForm

    return (
      <ContactWrapper>
        <AkagiHeader>
          AKAGI<Red>.</Red>CO
        </AkagiHeader>
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
            placeholder={'What’s the context?'}
            name={'message'}
            type={'textarea'}
            rows={5}
          />
          <Button hoverAnimation={'pop'} width={'100%'} form={formId}>
            {contactForm.isLoading ? 'Sending...' : 'Send'}
          </Button>
        </Form>
      </ContactWrapper>
    )
  }
}
