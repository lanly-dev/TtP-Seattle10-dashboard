const express = require('express')
const WS = require('../server/ws')

// Create express instnace
const app = express()
const WebSocket = require('ws')
app.post('/helloworld', (req, res, next) => {
  res.json({ hello: 'world' })
})

app.post('/data', WS.route)

module.exports = {
  path: '/api',
  handler: app
}
