import { observable, action } from 'mobx'
import Router from 'next/router'

export default class UserFormStore {
  @observable username = '@'

  @action init(username) {
    this.username = username
  }

  @action loadGun(Gun) {
    this.gun = Gun('http://localhost:8080/gun')
  }

  @action onUsernameChange = (e) => {
    const val = e.target.value
    this.username = val ? val : '@'
  }

  @action onSubmit = (e) => {
    e.preventDefault()
    const { elements, id: formId } = e.target
    const username = elements.username.value
    const password = elements.username.password
    console.log('this.gun', this.gun)
    this.gun.user().create(username, password, (cb) => {
      if (cb.err) {
        return alert(cb.err)
      }
      Router.push(`/${username}`)
    })
  }
}
