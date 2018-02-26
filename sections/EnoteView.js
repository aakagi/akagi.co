import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from 'components/Form'
import GeneralInput from 'components/GeneralInput'

const EnoteViewWrapper = styled.div`
  margin-top:48px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 48px;
`

@inject('store') @observer
class EditView extends React.Component {
  render() {
    const enote = this.props.store.enote

    return (
      <EnoteViewWrapper>
        <Title>
          Encrypted Note
        </Title>
        <div>
          Use this page to create your encrypted message
        </div>
        <Form maxWidth={'1200px'}>
          <GeneralInput
            value={enote.body}
            onChange={enote.onBodyChange}
            type={'textarea'}
            name={'enote'}
            rows={20}
            autoFocus
          />
        </Form>
      </EnoteViewWrapper>
    )
  }
}

@inject('store') @observer
class PublicView extends React.Component {
  render() {
    return (
      <EnoteViewWrapper>
      </EnoteViewWrapper>
    )
  }
}

@inject('store') @observer
class AuthView extends React.Component {
  render() {
    return (
      <EnoteViewWrapper>
      </EnoteViewWrapper>
    )
  }
}

@inject('store') @observer
export default class EnoteView extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    enoteSlug: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { username, enoteSlug } = this.props
    this.props.store.enote.init({ username, enoteSlug })
  }

  render() {
    const { loggedInAsThisUser, body } = this.props.store.enote

    if (loggedInAsThisUser) {
      return <EditView />
    } else if (!loggedInAsThisUser && body) {
      return <PublicView />
    } else if (!loggedInAsThisUser && !body) {
      return <AuthView />
    }
  }
}
