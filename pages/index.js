import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import AkagiTitle from 'sections/AkagiTitle'
import ContactMe from 'sections/ContactMe'
import LinksSection from 'sections/LinksSection'

// TODO: Move out of this component
import jsonFetch from 'lib/jsonFetch'
import formToJson from 'lib/formToJson'

const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  : 'http://localhost:4000'

// TODO: Move out of this component
function onSubmit(e) {
  e.preventDefault()
  const { elements, id: formId } = e.target

  // Generate the request body
  const body = formToJson(elements)
  jsonFetch('POST', `${API_BASE}/akagi-contact`, {
    body: body,
    mode: 'cors',
  })
  .then(({ error, message }) => {
    if (error) {
      return alert(error)
    } else {
      alert(message)
    }

    // Clear form
    document.getElementById(formId).reset()
  })
  .catch(err => {
    console.error('err', err)
    alert(err)
  })
}

const Home = () => (
  <AppLayout>
    <SeoHead />
    <AkagiTitle />
    <ContactMe
      onSubmit={onSubmit}
    />
    <LinksSection />
  </AppLayout>
)

export default Home
