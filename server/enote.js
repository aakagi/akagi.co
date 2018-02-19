const Gun = require('gun')

const GUN_SERVER = 'http://localhost:8080/gun'

module.exports = (cachedRender) => (req, res) => {
  const username = req.params.username
  const enote = req.params.enote

  // All usernames have @ symbol to differentiate, otherwise 404
  if (!username.includes('@')) {
    return cachedRender(req, res, `/${username}`)
  }

  // Check to see if username exists otherwise redirect to /new
  const gun = Gun(GUN_SERVER)
  gun.get(`alias/${username}`).val(userExists => {
    if (userExists) {
      cachedRender(req, res, '/username', { username })
    } else {
      res.redirect(302, `/new?username=${username}`)
    }
  })
}


(req, res) => {
    const username = req.params.username
    
    cachedRender(req, res, '/username/enote', { username, slug })
  }