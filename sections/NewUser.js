import { inject, observer } from 'mobx-react'
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

const UsernameInput = styled(GeneralInput)`
  &:first-letter {
    color: red;
  }
`

@inject('store') @observer
export default class NewUser extends React.Component {
  constructor(props) {
    super(props)
    props.store.userForm.setUsername(props.username)
  }

  render() {
    const formId = 'new-user'
    const userForm = this.props.store.userForm

    return (
      <NewUserWrapper>
        <Title>
          Create an Account
        </Title>
        <Form id={formId} onSubmit={userForm.onSubmit}>
          <UsernameInput
            required
            form={formId}
            name={'username'}
            placeholder={'Username'}
            value={userForm.username}
            onChange={userForm.onUsernameChange}
          />
          <GeneralInput
            required
            form={formId}
            name={'password'}
            type={'password'}
            placeholder={'Password'}
          />
          <Button width={'100%'} form={formId}>
            Submit
          </Button>
        </Form>
      </NewUserWrapper>
    )
  }
}
