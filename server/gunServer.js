const express = require('express')
const Gun = require('gun')

const GUN_PORT = 8080

// TODO: Figure out how to import env in a clean way
const dev = process.env.NODE_ENV !== 'production'
const BASE_URL = dev ? 'http://localhost' : 'https://akagi.co'

// Temp Gun server
const gunServer = express()
gunServer.use(Gun.serve)
const web = gunServer.listen(GUN_PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Gun server ready at ${BASE_URL}:${GUN_PORT}/gun`)
})

Gun({
  file: './TEMP-DATA/gun.json',
  web: web,
})

module.exports = Gun(`${BASE_URL}:${GUN_PORT}/gun`)
