<template lang="pug">
  span
    .row.text-left(v-for='team in emsTeams' @click='emsClick(team)')
      .col-3 {{team.id}}
      .col-9(:style='isSelected(team.id)'): small {{ team.name }} ETA-{{team.eta}}
</template>
<script>
export default {
  props: ['emsTeams'],
  data() {
    return {
      highlight: null
    }
  },
  mounted() {
    this.$store.watch(
      () => this.$store.getters.getMarkerPicked,
      (n) => {
        if (n.eta) this.highlight = n
        else this.highlight = null
      }
    )
  },
  methods: {
    emsClick(team) {
      this.$store.dispatch('PICK', team)
    },
    isSelected(id) {
      if (this.highlight && this.highlight.id === id) {
        return { backgroundColor: 'gray', color: 'white' }
      }
      return ''
    }
  }
}
</script>
<style scoped>
.row.text-left {
  cursor: pointer;
}

.row.text-left:hover {
  background-color: gray;
}
</style>
