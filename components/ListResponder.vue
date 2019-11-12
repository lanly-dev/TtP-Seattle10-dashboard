<template lang="pug">
  span
    .row(v-for='item in items')
      .col-2 color
      .col-10 {{ item.message }}
</template>
<script>
export default {
  data() {
    return {
      items: [
        { color: 'green', gender: 'male' },
        { color: 'yellow', gender: 'female' },
        { color: 'red', gender: 'female' },
        { color: 'black', gender: 'male' }
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
