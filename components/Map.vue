<template lang="pug">
  gmap-map#map(:center='mapCenter' :zoom=7 map-type-id='terrain')
    gmap-marker(:key='`a-${index}`' v-for='(m, index) in targets' :position='m.position' :clickable='true' @click='openInfoWindowTemplate(m)')
    gmap-marker(:key='`b-${index}`' v-for='(m, index) in emsTeams' :position='m.position' :clickable='true' @click='openInfoWindowTemplate(m)')
    gmap-info-window(:options='{maxWidth: 300}' :position='infoWindow.position' :opened='infoWindow.open' @closeclick='infoWindow.open=false')
      div
        p {{infoWindow.id}}
        p {{infoWindow.gender}}
        p {{infoWindow.name}}
</template>
<script>
export default {
  props: ['mapCenter', 'targets', 'emsTeams'],
  data() {
    return {
      infoWindow: {
        eta: -1,
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
        this.openInfoWindowTemplate(n)
      }
    )
  },
  methods: {
    markerClicked(m) {
      this.mapCenter = m.position
    },
    openInfoWindowTemplate(who) {
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
