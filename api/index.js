const express = require('express')
const WS = require('../server/ws')
const app = express()
app.post('/helloworld', (req, res, next) => {
  res.json({ hello: 'world' })
})

app.post('/data', WS.route)

module.exports = {
  path: '/api',
  handler: app
}
