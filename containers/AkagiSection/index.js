import styled from 'styled-components'
import ContactMe from './ContactMe'
import { red } from 'utils/colors'

// TODO: Move out of this component
import jsonFetch from 'lib/jsonFetch'
import formToJson from 'lib/formToJson'

const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  : 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  // : 'http://localhost:4000'

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

const SectionWrapper = styled.div`
  margin: 36px 0;
  text-align: center;
`

const AkagiHeader = styled.h1`
  font-size: 48px;
  padding: 24px 0;
`

const Red = styled.span`
  color: ${red};
`

const ContactSubtext = styled.h3`
  font-size 16px;
  padding: 24px 0;
`

const AkagiSection = () => (
  <SectionWrapper>
    <AkagiHeader>
      AKAGI<Red>.</Red>CO
    </AkagiHeader>
    <ContactSubtext>
      Let<Red>’</Red>s keep in touch<Red>!</Red>
    </ContactSubtext>
    <ContactMe
      onSubmit={onSubmit}
    />
  </SectionWrapper>
)

export default AkagiSection
