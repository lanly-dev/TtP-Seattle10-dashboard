const express = require('express')
const consola = require('consola')
const { Nuxt,Builder } = require('nuxt')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
global.WSS


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host,port } = nuxt.options.server
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const WebSocket = require('ws')
  app.use(bodyParser.json());       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  const server = http.createServer(app)
  const wss = new WebSocket.Server({ server })
  global.WSS = wss

  wss.on('connection',function connection(ws) {
    ws.on('message',function incoming(message) {
      console.log('received: %s',message)
      ws.send('something from server')
    })

    ws.on("request",function (req) {
      console.log(req.body)
    });
  })

  app.use(nuxt.render)

  // Listen the server
  server.listen(port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
