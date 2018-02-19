import { action, runInAction } from 'mobx'
import ContactFormStore from './ContactFormStore'
import UserFormStore from './UserFormStore'

let store = null

export default class AppStore {
  constructor() {
    this.init()
  }

  @action init() {
    runInAction(() => {
      this.contactForm = new ContactFormStore(this)
      this.userForm = new UserFormStore(this)
    })
  }

  @action loadGun(Gun) {
    runInAction(() => {
      this.userForm.loadGun(Gun)
    })
  }
}
