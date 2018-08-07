import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import GeneralInput from 'components/GeneralInput'
import Button from 'components/Button'

const ContactWrapper = styled.div`

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const GeneralInputWrapper = styled(GeneralInput)`
  margin-bottom: 6px;
`

@inject('store') @observer
export default class ContactMe extends React.Component {
  render() {
    const formId = 'contact-me'
    const contactForm = this.props.store.contactForm

    return (
      <ContactWrapper>
        <Form id={formId} onSubmit={contactForm.submitContactForm}>
          <GeneralInputWrapper
            form={formId}
            placeholder={'Email? *'}
            name={'email'}
            type={'email'}
            required
          />
          <GeneralInputWrapper
            form={formId}
            placeholder={'Context?'}
            name={'message'}
          />
          <Button hoverAnimation={'pop'} width={'100%'} form={formId}>
            {contactForm.isLoading ? 'Sending...' : 'Submit'}
          </Button>
        </Form>
      </ContactWrapper>
    )
  }
}
