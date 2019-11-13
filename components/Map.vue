<template lang="pug">
  gmap-map#map(:center='mapCenter' :zoom=7 map-type-id='terrain')
    gmap-marker(:key='index' v-for='(m, index) in markers' :position='m.position' :clickable='true' @click='openInfoWindowTemplate(m)')
    gmap-info-window(:options='{maxWidth: 300}' :position='infoWindow.position' :opened='infoWindow.open' @closeclick='infoWindow.open=false')
      div
        p helloworld popup
        p the 2nd line
        p the 3rd line

</template>
<script>
export default {
  props: ['mapCenter'],
  data() {
    return {
      markers: [
        { position: { lat: 11, lng: 11 } },
        { position: { lat: 13, lng: 12 } }
      ],
      infoWindow: {
        position: {},
        open: false
      }
    }
  },
  methods: {
    markerClicked(m) {
      this.mapCenter = m.position
    },
    openInfoWindowTemplate(item) {
      console.log(item)
      this.infoWindow.position = item.position
      this.infoWindow.open = true
    }
  }
}
</script>

<style>
#map {
  height: 35em;
  width: 100%;
}
</style>
