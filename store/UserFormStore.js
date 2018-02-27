import { observable, action } from 'mobx'
import GunStore from './GunStore'

export default class UserFormStore extends GunStore {
  @observable username = ''
  @observable usernameError = ''
  @observable loading = false
  @observable complete = false
  
  // TODO: Move out to lib once proper conventions are determined
  checkUsernameExists(username) {
    return new Promise(resolve => {
      this.gun.get(`alias/${username}`).val(userExists => {
        resolve(!!userExists)
      })
    })
  }

  async validateUsername(username) {
    // TODO: add realtime username validation on onUsernameChange
    if (username.length < 4) {
      throw 'Your username has to be at least 3 characters long (plus the @ symbol)'
    } else if (username.charAt(0) !== '@') {
      throw 'Your username must start with an `@` character'
    } else if (username.substring(1).match(/[^a-z\d:]/)) {
      throw 'Your username must be lowercase and alphanumeric'
    } else {
      const userExists = await this.checkUsernameExists(username)
      if (userExists) {
        throw 'This username is already being used'
      }
    }
  }

  setUsernameError(username, timeout = 0) {
    setTimeout(async () => {
      try {
        await this.validateUsername(username)
        this.usernameError = ''
      } catch (err) {
        this.usernameError = err
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

    // Validate username, but don't annoy people who just landed with an error
    if (this.username.length > 3) {
      this.setUsernameError(this.username)
    }
  }

  @action onUsernameChange = (e) => {
    const val = e.target.value
    this.setUsername(val)
    
    this.setUsernameError(this.username)
  }

  @action onSubmit = async (e) => {
    e.preventDefault()
    this.loading = true

    const { elements } = e.target
    const username = elements.username.value
    const password = elements.password.value

    // Validate username
    try {
      this.validateUsername(username)
    } catch (err) {
      this.loading = false
      return alert(err)
    }

    this.gun.user().create(username, password, (cb) => {
      this.loading = false

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
