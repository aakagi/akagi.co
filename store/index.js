import { action, runInAction } from 'mobx'
import ContactFormStore from './ContactFormStore'

export default class AppStore {
  constructor() {
    this.init()
  }

  @action init() {
    runInAction(() => {
      this.contactForm = new ContactFormStore(this)
    })
  }
}
