<template lang="pug">
  span
    .row.text-left(v-for='team in emsTeams')
      .col-3 {{team.id}}
      .col-9: small {{ team.name }} ETA-{{team.eta}}
</template>
<script>
export default {
  props: ['emsTeams'],
  methods: {
    itemClick() {
      console.log('clicked')
    }
  }
}
</script>
