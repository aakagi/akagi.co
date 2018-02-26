import { observable, action } from 'mobx'
import GunStore from './GunStore'

export default class EnoteStore extends GunStore {
  @observable loggedInAsThisUser = false
  @observable body = ''
  @observable password = ''

  // Initial load, window.localStorage may hold passwords
  //  async required because you can't auth two at a time with SEA
  @action async init({ username, enoteSlug }) {
    try {
      const thisUser = await this.loadUser(username, 'asdf')
      if (thisUser.alias === username) {
        this.loggedInAsThisUser = true
      }
    } catch(err) {} // Ignore login fails

    // Grab or init enote "user" in gun
    const enoteGunKey = `${username}/${enoteSlug}`
    try {
      await this.loadUser(enoteGunKey)
      this.user.get('body').val(body => {
        if (body && !body.err) {
          this.body = body
        }
      })
    } catch(err) {
      // Create a user with a blank password
      this.gun.user().create(enoteGunKey, '')
    }
  }

  @action onBodyChange = (e) => {
    const val = e.target.value
    this.body = val
    this.user.put({
      body: val,
    })
  }
}
