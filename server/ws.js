var WebSocket = require('ws')
var broadcast

function WS(server) {
  const wss = new WebSocket.Server({ server })

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message)
      ws.send('something from server')
    })

    ws.on('request', function(req) {
      console.log(req.body)
    })

    broadcast = (data) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data)
        }
      })
    }
  })
}

WS.route = function(req, res, next) {
  broadcast(req.body)
  res.sendStatus(200)
}

module.exports = WS
