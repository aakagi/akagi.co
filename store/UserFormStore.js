import { observable, action } from 'mobx'

export default class UserFormStore {
  @observable username = '@'

  @action loadGun(Gun) {
    this.gun = Gun('http://localhost:8080/gun')
  }

  @action setUsername(val) {
    if (!val) {
      this.username = ''
    } else if (val.charAt(0) !== '@') {
      this.username = '@' + val
    } else {
      this.username = val ? val : '@'
    }
  }

  @action onUsernameChange = (e) => {
    const val = e.target.value
    this.setUsername(val)
  }

  @action onSubmit = (e) => {
    e.preventDefault()
    const { elements } = e.target
    const username = elements.username.value
    const password = elements.password.value
    
    // Validate username
    if (username.length < 5) {
      return alert('Your username has to be at least 6 characters long (including the @ symbol)')
    } else if (username.charAt(0) !== '@') {
      return alert('Your username must start with an `@` character')
    }

    this.gun.user().create(username, password, (cb) => {
      if (cb.err) {
        return alert(cb.err)
      }

      // Not using router because that shows 404, we want page to ping server
      window.location.href = `/${username}`
    })
  }
}
