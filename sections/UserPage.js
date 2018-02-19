
export default class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.test = 0
  }

  render() {
    return (
      <div>
        <div>
          <a onClick={this.createUnencrypted}>
            Create unencrypted
          </a>
        </div>
        <br />
        <div>
          <a onClick={this.createUser}>
          Create user
          </a>
        </div>
        <br />
        <div>
          <a onClick={this.attachUser}>
            Attach user
          </a>
        </div>
        <br />
        <div>
          <a onClick={this.logVal}>
            logVal
          </a>
        </div>
      </div>
    )
  }
}
