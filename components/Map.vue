<template lang="pug">
  GmapMap#map(:center='{lat:10, lng:10}' :zoom='7' map-type-id='terrain')
    GmapMarker(:key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position")
</template>
<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 11, lng: 11 } },
        { position: { lat: 13, lng: 12 } }
      ]
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
