<template lang="pug">
  span
    .row.text-left(v-for='team in responders')
      .col-3 {{team.id}}
      .col-9: small {{ team.name }} ETA-{{team.eta}}
</template>
<script>
export default {
  data() {
    return {
      responders: [
        { id: 1, name: 'team1', eta: 10 },
        { id: 2, name: 'team2', eta: 20 },
        { id: 3, name: 'team3', eta: 5 },
        { id: 4, name: 'team4', eta: 0 }
      ]
    }
  },
  methods: {
    itemClick() {
      console.log('clicked')
    }
  }
}
</script>
