<template lang="pug">
  .container-fluid
    h4 TtP-Seattle10-dashboard
    //- h1.title TtP-Seattle10-dashboard
    //- h2.subtitle dashboard
    .row
      .col-1.sidebar1: list-t
      .col-10: g-map
      .col-1.sidebar2: list-r
    button.btn.btn-primary(@click='press') Press
    button.btn.btn-primary(@click='wspress') WSPress
</template>

<script>
import axios from 'axios'
import ListT from '~/components/ListTarget'
import ListR from '~/components/ListResponder'
import GMap from '~/components/Map'
export default {
  components: {
    ListT,
    ListR,
    GMap
  },
  methods: {
    async press() {
      console.log(process.env.GKey)
      const data = await axios.post('/api/helloworld', {
        client: 'client data'
      })
      console.log(data.data)
    },
    wspress() {
      console.log(window.location.hostname)
      if ('WebSocket' in window) {
        console.log('WebSocket is supported by your Browser!')

        // Let us open a web socket
        const ws = new WebSocket(`wss://${window.location.hostname}`)

        ws.onopen = function() {
          console.log('open')
          // Web Socket is connected, send data using send()
          ws.send('Message to send')
          console.log('Message is sent...')
        }

        ws.onmessage = function(evt) {
          console.log(evt.data)
          console.log('$$$$$$$$$')
        }

        ws.onclose = function() {
          // websocket is closed.
          // alert('Connection is closed...')
          console.log('closed')
        }
      } else {
        // The browser doesn't support WebSocket
        alert('WebSocket NOT supported by your Browser!')
      }
    }
  }
}
</script>

<style>
.container-fluid {
  padding: 2em;
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sidebar1 {
  background-color: lightblue;
}

.sidebar2 {
  background-color: lightgreen;
}
</style>
