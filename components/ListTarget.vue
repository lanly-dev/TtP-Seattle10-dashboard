<template lang="pug">
  span
    .row.text-left(v-for='target in targets' @click='targetClick(target)')
      .col-3(:style='tagColor(target.tag)'): span {{target.id}}
      .col-9 {{ target.gender }}
</template>
<script>
export default {
  props: ['targets'],
  methods: {
    tagColor(color) {
      let textColor = 'white'
      if (color === 'yellow') textColor = 'black'
      return { backgroundColor: color, color: textColor }
    },
    targetClick(target) {
      this.$store.dispatch('PICK', target)
    }
  }
}
</script>
<style>
.row.text-left {
  cursor: pointer;
}

.row.text-left:hover {
  background-color: gray;
}
</style>
