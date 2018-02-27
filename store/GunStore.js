import { observable, action } from 'mobx'

// TODO: Figure out how to import env in a clean way
const dev = process.env.NODE_ENV !== 'production'
const BASE_URL = dev ? 'http://localhost' : 'https://akagi.co'

export default class GunStore {
  @action loadGun(Gun) {
    this.gun = Gun(`${BASE_URL}:8080/gun`)
    this.user = this.gun.user()
  }

  loadUser(username, password) {
    const passKey = `${username}/pass`
    const storedPass = window.localStorage.getItem(passKey)

    const pass = password || storedPass || ''
    window.localStorage.setItem(passKey, pass)

    return new Promise((resolve, reject) => {
      this.user.auth(username, pass, cb => {
        if (cb.err) {
          return reject(cb.err)
        }

        return resolve({ ...cb, password: pass })
      })
    })
  }
}
