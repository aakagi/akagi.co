const next = require('next');
const compression = require('compression');
const { parse } = require('url');
const { useStaticRendering } = require('mobx-react');
const express = require('express');
const LRUCache = require('lru-cache');

const DEV = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev: DEV });
const handle = app.getRequestHandler();

// Serve cached html
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24 // 24h
});

const cachedRender = (req, res, pagePath, queryParams) => {
  const key = `${req.url}`;

  if (!DEV && ssrCache.has(key)) {
    res.append('X-Cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(key, html);
      res.append('X-Cache', 'MISS');
      res.append('Cache-Control', 'public, max-age=86400');
      res.send(html);
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

// SSR React doesn't fire unmount lifecycle methods
//  https://github.com/mobxjs/mobx-react#server-side-rendering-with-usestaticrendering
useStaticRendering(true);

// 
// Next.js Server w/ Express
// 
app.prepare().then(() => {
  const server = express();

  server.use(compression()); // Gzip
  server.disable('x-powered-by'); // Remove Express default header

  server.use('/static', express.static('./static', {
    maxAge: 0,
    etag: false,
    index: false,
    redirect: false,
    extensions: ['png', 'jpg', 'pdf'],
  }));

  // Catch update pings in DEV
  if (DEV) {
    server.get('/_next/*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  }


  // 
  // Routes
  // 

  server.get('/', (req, res) => {
    cachedRender(req, res, '/');
  });

  server.get('/:testing', (req, res) => {
    const testing = req.params.testing;
    cachedRender(req, res, '/testing', { testing });
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });


  // 
  // Launch server
  // 

  server.listen(PORT, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
