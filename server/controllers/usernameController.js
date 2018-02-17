const Gun = require('gun')

module.exports = (cachedRender) => (req, res) => {
  const username = req.params.username

  // All usernames have @ symbol to differentiate
  const isUsername = username.includes('@')
  if (isUsername) {
    const gun = Gun('http://localhost:8080/gun')

    gun.get(`alias/${username}`).val(userExists => {
      if (userExists) {
        cachedRender(req, res, '/username', { username })
      } else {
        // Redirect to /new and pass param to prepolutate w/ username
        res.redirect(302, `/new?username=${username}`)
      }
    })
  } else {
    // Not a username, refers to page slug, probably 404
    cachedRender(req, res, `/${username}`)
  }
}
