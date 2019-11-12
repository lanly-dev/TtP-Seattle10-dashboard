<template lang="pug">
  GmapMap#map(:center='mapCenter' :zoom='7' map-type-id='terrain')
    GmapMarker(:key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click='markerClicked(m)')
</template>
<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 11, lng: 11 } },
        { position: { lat: 13, lng: 12 } }
      ],
      mapCenter: { lat: 10, lng: 10 }
    }
  },
  methods: {
    markerClicked(m) {
      this.mapCenter = m.position
    }
  }
}
</script>

<style>
#map {
  height: 400px;
  width: 100%;
}
</style>
