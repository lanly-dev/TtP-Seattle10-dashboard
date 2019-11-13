<template lang="pug">
  span
    .row.text-left(v-for='target in targets')
      .col-3(:style='tagColor(target.color)'): span {{target.id}}
      .col-9 {{ target.gender }}
</template>
<script>
export default {
  data() {
    return {
      targets: [
        { id: 1, color: 'green', gender: 'male' },
        { id: 2, color: 'yellow', gender: 'female' },
        { id: 3, color: 'red', gender: 'female' },
        { id: 4, color: 'black', gender: 'male' }
      ]
    }
  },
  methods: {
    tagColor(color) {
      let textColor = 'white'
      if (color === 'yellow') textColor = 'black'
      return { backgroundColor: color, color: textColor }
    },
    itemClick() {
      console.log('clicked')
    }
  }
}
</script>
