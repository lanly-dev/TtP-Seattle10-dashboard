<template lang="pug">
  span
    .row.text-left(v-for='team in emsTeams' @click='emsClick(team)')
      .col-3 {{team.id}}
      .col-9: small {{ team.name }} ETA-{{team.eta}}
</template>
<script>
export default {
  props: ['emsTeams'],
  methods: {
    emsClick(team) {
      this.$store.dispatch('PICK', team)
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
