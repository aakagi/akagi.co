import fetch from 'isomorphic-fetch'

export default async function jsonFetch(method, url, options) {
  const { body, ...overwrite } = options

  // Set json body only if defined
  const data = body ? { body: JSON.stringify(body) } : {}

  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...data,
    ...overwrite,
  })

  return res.json()
}
