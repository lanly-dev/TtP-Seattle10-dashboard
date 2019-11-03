const express = require('express')

// Create express instnace
const app = express()

app.post('/helloworld', (req, res, next) => {
  console.log('working')
  console.log(req)
  res.json({ hello: 'world' })
})

app.post('/data', (req, res, next) => {
  console.log('recieve')
  global.WS.send('send data from server')
  res.sendStatus(200)
})
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
