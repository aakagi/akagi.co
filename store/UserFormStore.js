import { observable, action } from 'mobx'

export default class UserFormStore {
  @observable username = '@'

  @action loadGun(Gun) {
    this.gun = Gun('http://localhost:8080/gun')
  }

  @action setUsername(username) {
    this.username = username
  }

  @action onUsernameChange = (e) => {
    const val = e.target.value
    this.username = val ? val : '@'
  }

  @action onSubmit = (e) => {
    e.preventDefault()
    const { elements } = e.target
    const username = elements.username.value
    const password = elements.password.value

    this.gun.user().create(username, password, (cb) => {
      if (cb.err) {
        return alert(cb.err)
      }

      // Not using router because that shows 404, we want page to ping server
      window.location.href = `/${username}`
    })
  }
}
