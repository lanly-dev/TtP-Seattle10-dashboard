<template lang="pug">
  span
    .row.text-left(v-for='target in targets' @click='targetClick(target)')
      .col-3(:style='tagColor(target.tag)'): span {{target.id}}
      .col-9(:style='isSelected(target.id)') {{ target.gender }}
</template>
<script>
export default {
  props: ['targets'],
  data() {
    return {
      highlight: null
    }
  },
  mounted() {
    this.$store.watch(
      () => this.$store.getters.getMarkerPicked,
      (n) => {
        if (n.tag) this.highlight = n
        else this.highlight = null
      }
    )
  },
  methods: {
    isSelected(id) {
      if (this.highlight && this.highlight.id === id) {
        return { backgroundColor: 'gray', color: 'white' }
      }
      return ''
    },
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
<style scoped>
.row.text-left {
  cursor: pointer;
}

.row.text-left:hover {
  background-color: lightgray;
}
</style>
