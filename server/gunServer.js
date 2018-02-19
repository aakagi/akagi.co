const express = require('express')
const Gun = require('gun')

const GUN_PORT = 8080

// Temp Gun server
const gunServer = express()
gunServer.use(Gun.serve)
const web = gunServer.listen(GUN_PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Gun server ready on port ${GUN_PORT}`)
})

Gun({
  file: './TEMP-DATA/gun.json',
  web: web,
})

module.exports = Gun(`http://localhost:${GUN_PORT}/gun`)
