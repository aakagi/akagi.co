import styled from 'styled-components'
import GeneralInput from 'components/GeneralInput'

const EnoteViewWrapper = styled.div`
  margin-top:48px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 48px;
`

export default class NewEnote extends React.Component {
  render() {
    const username = this.props.url.query.username

    return (
      <EnoteViewWrapper>
        <Title>
          Welcome, {username}!
        </Title>
        <div>
          We still don't have a list of all of your links, we are waiting for a database upgrade...
        </div>
        <div>
          That said, you can still create links! Just type anything after your url.
        </div>
        <div>
          For instance: <a href={`/${username}/try-this-out`}>https://akagi.co/{username}/try-this-out</a>
        </div>
        <GeneralInput name={'enote'} type={'textarea'} />
      </EnoteViewWrapper>
    )
  }
}
