const express = require('express')

// Create express instnace
const app = express()

app.use('/helloworld',  (req, res, next) => {
  console.log('working')
  res.json({hello: 'world'})
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}