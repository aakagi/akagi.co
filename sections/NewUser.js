import { inject, observer } from 'mobx-react'
import NextHead from 'next/head'
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
    props.store.userForm.init(props.username)
  }

  componentDidMount() {
    // 'Temporary' hack to prevent server error because
    //   Gun is imported globally client-side
    //   loadGun() can't be passed down as a prop because react
    this.props.store.userForm.loadGun(Gun)
  }

  render() {
    const formId = 'new-user'
    const userForm = this.props.store.userForm

    return (
      <NewUserWrapper>
        <NextHead>
          <script src="https://cdn.jsdelivr.net/npm/gun/gun.js" />
          <script src="https://cdn.jsdelivr.net/npm/gun/sea.js" />
        </NextHead>
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
