const express = require('express')

// Create express instnace
const app = express()

app.post('/helloworld',  (req, res, next) => {
  res.json({hello: 'world'})
})

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}