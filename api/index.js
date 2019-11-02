const express = require('express')

// Create express instnace
const app = express()

app.post('/helloworld',  (req, res, next) => {
  res.json({hello: 'world'})
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}