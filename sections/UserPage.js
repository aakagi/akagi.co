// import Gun from 'gun'

export default class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.test = 0
  }

  componentDidMount() {
    this.gun = Gun('http://localhost:8080/gun')
    this.user = this.gun.user()
  }

  createUnencrypted = (e) => {
    e.preventDefault()
    
    this.user.get('unencrypted2').put({
      alex2: 'this string should not be encrypted',
    }, cb => {
      console.log('unencrypted cb', cb)
    })
  }

  createUser = (e) => {
    e.preventDefault()

    this.user.create('alexencypt2', 'pass', cb => {
      console.log('user created cb', cb)
    })
  }

  attachUser = (e) => {
    e.preventDefault()

    this.user.get('unencrypted2').put(this.user, cb => {
      console.log('attachUser cb', cb)
    })
  }

  logVal = (e) => {
    this.gun.get('unencrypted').get('a').val(cb => {
      console.log('usernameExists', cb)
    })
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
