<template lang="pug">
  gmap-map#map(:center='mapCenter' :zoom=7 map-type-id='terrain')
    gmap-marker(:key='`a-${index}`' :icon='m.icon' v-for='(m, index) in targetsColor()' :position='m.position' :clickable='true' @click='markerClicked(m)')
    gmap-marker(:key='`b-${index}`' :icon='m.icon' v-for='(m, index) in emsTeamsColor()' :position='m.position' :clickable='true' @click='markerClicked(m)')
    gmap-info-window(:options='{maxWidth: 300}' :position='infoWindow.position' :opened='infoWindow.open' @closeclick='infoWindow.open=false')
      div
        .row
          .col-2(:style='tagColor(infoWindow.tag)') {{infoWindow.id}}
          .col-10(v-if='infoWindow.gender') {{infoWindow.gender}}
          .col-5(v-if='infoWindow.name') {{infoWindow.name}}
          .col-5(v-if='infoWindow.eta') ETA-{{infoWindow.eta}}
</template>
<script>
export default {
  props: ['mapCenter', 'targets', 'emsTeams'],
  data() {
    return {
      infoWindow: {
        eta: null,
        gender: null,
        id: -1,
        name: null,
        open: false,
        position: {},
        tag: null
      }
    }
  },
  mounted() {
    this.$store.watch(
      () => this.$store.getters.getMarkerPicked,
      (n) => {
        this.markerClicked(n)
      }
    )
  },
  methods: {
    markerClicked(who) {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.infoWindow.id = who.id
      this.infoWindow.position = who.position
      if (who.tag) {
        this.infoWindow.gender = who.gender
        this.infoWindow.tag = who.tag
      } else {
        this.infoWindow.eta = who.eta
        this.infoWindow.name = who.name
      }
      this.infoWindow.open = true
      this.$store.dispatch('PICK', who)
    },
    emsTeamsColor() {
      const temp = []
      for (const t of this.emsTeams) {
        t.icon = {
          url: '/mblue.png'
        }
        temp.push(t)
      }
      return temp
    },
    targetsColor() {
      const temp = []
      for (const t of this.targets) {
        let colorPath
        if (t.tag === 'green') colorPath = '/mgreen.png'
        else if (t.tag === 'yellow') colorPath = '/myellow.png'
        else if (t.tag === 'red') colorPath = '/mred.png'
        else if (t.tag === 'black') colorPath = '/mblack.png'
        t.icon = {
          url: colorPath
        }
        temp.push(t)
      }
      return temp
    },
    tagColor(color) {
      let textColor = 'white'
      if (color === 'yellow') textColor = 'black'
      if (!color) color = 'blue'
      return { backgroundColor: `${color} !important`, color: textColor }
    }
  }
}
</script>

<style>
#map {
  height: 35em;
  width: 100%;
}

/*style the box which holds the text of the information window*/
.gm-style .gm-style-iw {
  background-color: white !important;
  top: 0 !important;
  left: 0 !important;
  width: 150px !important;
  /* height: 100% !important; */
  /* min-height: 120px !important; */
  padding-top: 10px;
  display: block !important;
}

.gm-style div div div div div div div div {
  background-color: white !important;
  margin: 0;
  padding: 0;
  top: 0;
  color: black;
  font-size: 16px;
}

/*remove litte arrow bottom */
.gm-style .gm-style-iw-t::after {
  content: none !important;
}
</style>
