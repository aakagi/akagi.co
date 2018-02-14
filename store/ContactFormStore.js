import { observable, action } from 'mobx'
import jsonFetch from 'lib/jsonFetch'
import formToJson from 'lib/formToJson'
import routes from 'constants/apiRoutes'

export default class ContactFormStore {
  @observable isLoading = false

  @action submitContactForm = (e) => {
    e.preventDefault()
    const { elements, id: formId } = e.target

    this.isLoading = true

    // Generate the request body
    jsonFetch('POST', routes.forms.contactForm, {
      body: formToJson(elements),
      mode: 'cors',
    })
    .then(({ error, message }) => {
      if (error) {
        return alert(error)
      } else {
        alert(message)
      }

      // Clear form
      this.isLoading = false
      document.getElementById(formId).reset()
    })
    .catch(err => {
      console.error('err', err)
      alert(err)
      this.isLoading = false
    })
  }
}
