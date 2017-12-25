const dev = process.env.NODE_ENV !== 'production'
// const moduleAlias = require('module-alias')
// 
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

app.prepare()
  .then(() => {
    const server = express()
    
    // Force SSL on prod
    if (!dev) {
      server.use(forceHTTPS)
    }
    
    // Gzip
    server.use(compression())

    server.disable('x-powered-by')

    server.get('/me/:pageId', (req, res) => {
      const pageId = req.params.pageId
      console.log('pageId', pageId)
      cachedRender(req, res, '/post', { pageId })
    })

    server.use('/static', express.static('./static', {
      maxage: '48h',
      index: false,
      redirect: false
    }))

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
