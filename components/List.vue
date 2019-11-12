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
      items: [{ message: 'hello' }, { message: 'world' }]
    }
  },
  methods: {
    itemClick() {
      console.log('clicked')
    }
  }
}
</script>
