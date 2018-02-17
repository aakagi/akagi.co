import { action, runInAction } from 'mobx'
import ContactFormStore from './ContactFormStore'
import UserFormStore from './UserFormStore'

let store = null

class AppStore {
  constructor(isServer) {
    this.isServer = isServer
    this.init()
  }

  @action async init() {
    runInAction(() => {
      this.contactForm = new ContactFormStore(this)
      this.userForm = new UserFormStore(this)
    })
  }
}

export default function initStore(isServer) {
  if (isServer) {
    return new AppStore(isServer)
  } else {
    if (store === null) {
      store = new AppStore(isServer)
    }
    return store
  }
}
