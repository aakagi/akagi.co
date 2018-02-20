const dev = process.env.NODE_ENV !== 'production'
// const moduleAlias = require('module-alias')

// if (!dev) {
//   moduleAlias.addAlias('react', 'preact-compat')
//   moduleAlias.addAlias('react-dom', 'preact-compat')
// }

const { parse } = require('url')
const express = require('express')
const LRUCache = require('lru-cache')
const next = require('next')
const mobxReact = require('mobx-react')
const compression = require('compression')
const forceHTTPS = require('express-force-https')

const socialUrls = require('../constants/socialUrls')
const redirectUsername = require('./middleware/redirectUsername')

// Temp gun server hosted on port 8080
const gun = require('./gunServer')

mobxReact.useStaticRendering(true)

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24 // 24h
})

const cachedRender = (req, res, pagePath, queryParams) => {
  const key = `${req.url}`

  if (!dev && ssrCache.has(key)) {
    res.append('X-Cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(key, html)

      res.append('X-Cache', 'MISS')
      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  // Force SSL on prod
  if (!dev) {
    server.use(forceHTTPS)
  }

  // Gzip
  server.use(compression())
  
  // Remove Express default header
  server.disable('x-powered-by')

  server.use('/static', express.static('./static', {
    maxage: '48h',
    index: false,
    redirect: false
  }))

  // Catch update pings in dev
  if (dev) {
    server.get('/_next/*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
  }

  // Redirects for social links
  Object.keys(socialUrls).forEach(socialAccount => {
    server.get('/' + socialAccount, (req, res) => {
      res.redirect(301, socialUrls[socialAccount])
    })
  })

  // Temp "things" redirect
  server.get('/things', (req, res) => {
    res.redirect(301, 'https://github.com/aakagi/akagi-website/tree/master/pages/things/temp.md')
  })

  server.get('/thoughts', (req, res) => {
    cachedRender(req, res, '/thoughts')
  })

  server.get('/new', (req, res) => {
    const username = req.query.username
    cachedRender(req, res, '/new', { username })
  })

  server.get('/:username', redirectUsername, (req, res) => {
    cachedRender(req, res, res.locals.renderPath, res.locals.renderParams)
  })

  server.get('/:username/:enote', redirectUsername, (req, res) => {
    // Note: missing username would have already been redirected
    const username = req.params.username
    const enote = req.params.enote
    gun.get(`alias/${enote}`).val(enoteExists => {
      cachedRender(req, res, '/username/enote')
    })
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  server.listen(PORT, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
