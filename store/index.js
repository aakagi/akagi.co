import { action, runInAction } from 'mobx'
import ContactFormStore from './ContactFormStore'
import UserFormStore from './UserFormStore'
import EnoteStore from './EnoteStore'

export default class AppStore {
  constructor() {
    this.init()
  }

  @action init() {
    runInAction(() => {
      this.contactForm = new ContactFormStore(this)
      this.userForm = new UserFormStore(this)
      this.enote = new EnoteStore(this)
    })
  }

  @action loadGun(Gun) {
    runInAction(() => {
      this.userForm.loadGun(Gun)
      this.enote.loadGun(Gun)
    })
  }
}
