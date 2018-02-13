import styled from 'styled-components'
import Form from 'components/Form'
import GeneralInput from 'components/GeneralInput'
import Button from 'components/Button'

const NewUserWrapper = styled.div`
  margin: 36px 0;
  text-align: center;
`

const Title = styled.h2`
  font-size: 36px;
  padding: 24px 0;
`

const SubmitButton = Button.extend`
  width: 100%;
`

const NewUser = ({ formId = 'contact-me', ...props }) => (
  <NewUserWrapper>
    <Title>
      Create an Account
    </Title>
    <Form id={formId} {...props}>
      <GeneralInput
        name={'username'}
        placeholder={'Username'}
        form={formId}
      />
      <GeneralInput
        name={'password'}
        type={'password'}
        placeholder={'Password'}
        form={formId}
      />
      <SubmitButton form={formId}>
        Submit
      </SubmitButton>
    </Form>
  </NewUserWrapper>
)

export default NewUser
