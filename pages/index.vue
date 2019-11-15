<template lang="pug">
  .container-fluid
    h4 ATOMIC: Assisted Triage Online for MCI Incident Commanders
    //- h1.title ATOMIC: Assisted Triage Online for MCI Incident Commanders
    //- h2.subtitle dashboard
    .row.bg-light.border
      g-map(:mapCenter='mapCenter' :targets='targets' :emsTeams='emsTeams')
    .row.bg-light.border
      .col-6.sidebar1: list-t(:targets='targets')
      .col-6.sidebar2: list-e(:emsTeams='emsTeams')
    //- for testing REST API and Websocket
    //- button.btn.btn-primary(@click='press') Press
    //- button.btn.btn-primary(@click='wspress') WSPress
</template>

<script>
import axios from 'axios'
import ListT from '~/components/ListTarget'
import ListE from '~/components/ListEms'
import GMap from '~/components/Map'
export default {
  components: {
    ListT,
    ListE,
    GMap
  },
  data() {
    return {
      mapCenter: { lat: 10, lng: 10 },
      targets: [
        { id: 1, tag: 'green', gender: 'male', position: { lat: 10, lng: 11 } },
        { id: 2, tag: 'yellow', gender: 'female', position: { lat: 9, lng: 11 } }, // eslint-disable-line
        { id: 3, tag: 'red', gender: 'female', position: { lat: 8, lng: 11 } },
        { id: 4, tag: 'black', gender: 'male', position: { lat: 12, lng: 11 } }
      ],
      emsTeams: [
        { id: 1, name: 'team1', position: { lat: 11, lng: 7 }, eta: 10 },
        { id: 2, name: 'team2', position: { lat: 11, lng: 8 }, eta: 20 },
        { id: 3, name: 'team3', position: { lat: 11, lng: 12 }, eta: 5 },
        { id: 4, name: 'team4', position: { lat: 11, lng: 13 }, eta: 0 }
      ]
    }
  },
  methods: {
    async press() {
      // button post
      const data = await axios.post('/api/helloworld', {
        client: 'client data'
      })
      console.log(data.data)
    },
    wspress() {
      // button websocket
      let wssAdress

      if (window.location.hostname === 'localhost')
        wssAdress = `ws://${window.location.hostname}:3000`
      else wssAdress = `wss://${window.location.hostname}`

      if ('WebSocket' in window) {
        console.log('WebSocket is supported by your Browser!')

        const ws = new WebSocket(wssAdress)

        ws.onopen = () => {
          console.log('open')
          // Web Socket is connected, send data using send()
          ws.send('Message to send')
          console.log('Message is sent...')
        }

        ws.onmessage = (evt) => {
          console.log('$$$$$$$$$')
          console.log(evt.data)
          console.log('$$$$$$$$$')
        }

        ws.onclose = () => {
          // websocket is closed.
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
