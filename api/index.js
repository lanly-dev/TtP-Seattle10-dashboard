const express = require('express')

// Create express instnace
const app = express()
const WebSocket = require('ws')
app.post('/helloworld',(req,res,next) => {
  console.log('working')
  console.log(req)
  res.json({ hello: 'world' })
})

app.post('/data',(req,res,next) => {
  console.log('recieve')
  global.WSS.clients.forEach(function each(client) {
    console.log(client)
    if (client.readyState === WebSocket.OPEN) {
      client.send(req.body);
    }
  });
  res.sendStatus(200)
})
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
