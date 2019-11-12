<template lang="pug">
  span
    li(v-for='item in items') {{ item.message }}
</template>
<script>
export default {
  data() {
    return {
      items: [{ message: 'hello' }, { message: 'world' }]
    }
  }
}
</script>
