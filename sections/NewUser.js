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

@inject('store') @observer
export default class NewUser extends React.Component {
  constructor(props) {
    super(props)
    props.store.userForm.setUsername(props.username)
  }

  render() {
    const formId = 'new-user'
    const userForm = this.props.store.userForm
    const autoFocusUsername = !userForm.username || userForm.username === '@'

    return (
      <NewUserWrapper>
        <Title>
          Create an Account
        </Title>
        <Form id={formId} onSubmit={userForm.onSubmit}>
          <GeneralInput
            required
            form={formId}
            name={'username'}
            placeholder={'Username'}
            autoFocus={autoFocusUsername}
            value={userForm.username}
            onChange={userForm.onUsernameChange}
            error={userForm.usernameError}
          />
          <GeneralInput
            required
            form={formId}
            name={'password'}
            type={'password'}
            placeholder={'Password'}
            autoFocus={!autoFocusUsername}
          />
          <Button hoverAnimation={'pop'} width={'100%'} form={formId}>
            {userForm.complete ? 'Success!' : 'Next'}
          </Button>
        </Form>
      </NewUserWrapper>
    )
  }
}
