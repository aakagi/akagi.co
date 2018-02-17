const express = require('express')
const Gun = require('gun')

// Temp Gun server
const gunServer = express()
gunServer.use(Gun.serve)
const web = gunServer.listen(8080, err => {
  if (err) {
    throw err
  }

  console.log('Gun server ready on port 8080')
})

Gun({
  file: './TEMP-DATA/gun.json',
  web: web,
})
