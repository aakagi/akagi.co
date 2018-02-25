import { observable, action } from 'mobx'

export default class UserFormStore {
  @observable username = '@'
  @observable usernameError = ''
  @observable complete = false

  @action loadGun(Gun) {
    this.gun = Gun('http://localhost:8080/gun')
  }

  validateUsername(username) {
    // TODO: add realtime username validation on onUsernameChange
    if (username.length < 4) {
      throw 'Your username has to be at least 3 characters long (plus the @ symbol)'
    } else if (username.charAt(0) !== '@') {
      throw 'Your username must start with an `@` character'
    } else if (username.substring(1).match(/[^a-z\d:]/)) {
      throw 'Your username must be lowercase and alphanumeric'
    }
  }

  setUsernameError(username, timeout = 0) {
    setTimeout(() => {
      try {
        this.validateUsername(username)
        this.usernameError = ''
      } catch (err) {
        this.usernameError = err
        console.log('err', err)
      }
    }, timeout)
  }

  @action setUsername(val) {
    if (!val) {
      this.username = ''
    } else if (val.charAt(0) !== '@') {
      this.username = '@' + val
    } else {
      this.username = val ? val : '@'
    }

    this.setUsernameError(this.username)
  }

  @action onUsernameChange = (e) => {
    const val = e.target.value
    this.setUsername(val)

    this.setUsernameError(this.username)
  }

  @action onSubmit = async (e) => {
    e.preventDefault()
    const { elements } = e.target
    const username = elements.username.value
    const password = elements.password.value

    // Validate username
    try {
      this.validateUsername(username)
    } catch (err) {
      return alert(err)
    }

    this.gun.user().create(username, password, (cb) => {
      if (cb.err) {
        return alert(cb.err)
      }

      this.complete = true

      // Delay for 1 second, which shows complete dialoge...
      //  Not using router because that shows 404, we want page to ping server
      setTimeout(() => {
        window.location.href = `/${username}`
      }, 1000)
    })
  }
}
