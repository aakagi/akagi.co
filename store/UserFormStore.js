import { observable, action } from 'mobx'
import Router from 'next/router'

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
      Router.push(`/${username}`)
    })
  }
}
