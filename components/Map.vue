<template lang="pug">
  gmap-map#map(:center='mapCenter' :zoom=7 map-type-id='terrain')
    gmap-marker(:key='`a-${index}`' v-for='(m, index) in targets' :position='m.position' :clickable='true' @click='openInfoWindowTemplate(m)')
    gmap-marker(:key='`b-${index}`' v-for='(m, index) in emsTeams' :position='m.position' :clickable='true' @click='openInfoWindowTemplate(m)')
    gmap-info-window(:options='{maxWidth: 300}' :position='infoWindow.position' :opened='infoWindow.open' @closeclick='infoWindow.open=false')
      div
        p helloworld popup
        p the 2nd line
        p the 3rd line
</template>
<script>
export default {
  props: ['mapCenter', 'targets', 'emsTeams'],
  data() {
    return {
      infoWindow: {
        position: {},
        open: false
      }
    }
  },
  mounted() {
    this.$store.watch(
      () => this.$store.getters.getMarkerPicked,
      (n) => {
        this.openInfoWindowTemplate(n)
      }
    )
  },
  methods: {
    markerClicked(m) {
      this.mapCenter = m.position
    },
    openInfoWindowTemplate(item) {
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
