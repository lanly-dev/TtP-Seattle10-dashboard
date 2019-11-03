var WebSocket = require('ws')
var broadcast

function WS(server) {
  const wss = new WebSocket.Server({ server })

  wss.on('connection',function connection(ws) {
    ws.on('message',function incoming(message) {
      console.log('received: %s',message)
      ws.send('something from server')
    })

    ws.on("request",function (req) {
      console.log(req.body)
    });

    broadcast = () => {
      wss.clients.forEach(function each(client) {
        console.log(client)
        if (client.readyState === WebSocket.OPEN) {
          client.send('helloworld');
        }
      })
    }
  })
}

WS.route = function (req,res,next) {
  broadcast()
}

module.exports = WS
