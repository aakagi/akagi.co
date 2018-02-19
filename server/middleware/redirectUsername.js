const gun = require('../gunServer')

module.exports = (req, res, done) => {
  const username = req.params.username

  // All usernames have @ symbol to differentiate, otherwise 404
  if (!username.includes('@')) {
    res.locals.renderPath = `/${username}`
    return done()
  }

  // Check to see if username exists otherwise redirect to /new
  gun.get(`alias/${username}`).val(userExists => {
    if (userExists) {
      res.locals.renderPath = '/username'
      res.locals.renderParams = { username }
      done()
    } else {
      res.redirect(302, `/new?username=${username}`)
    }
  })
}
