import _ from 'lodash'

const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  // : 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  : 'http://localhost:4000'

const prefixes = {
  forms: 'forms',
}

const paths = {
  forms: {
    contactForm: 'contact-akagi',
  },
}

const routes = {}

Object.keys(paths).map(domain => {
  Object.keys(paths[domain]).map(pathKey => {
    const path = _.get(paths, `${domain}.${pathKey}`)
    _.set(routes, `${domain}.${pathKey}`, `${API_BASE}/${prefixes[domain]}/${path}`)
    return false
  })

  return false
})

export default routes
