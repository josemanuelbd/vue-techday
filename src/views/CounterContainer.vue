<template>
  <my-counter :count="count" @onChangeCount="changeCount"></my-counter>
</template>

<script>
import MyCounter from '@/components/MyCounter.vue'

export default {
  name: 'counter',
  data: function () {
    return {
      count: 0
    }
  },
  components: {
    MyCounter
  },
  methods: {
    changeCount (count) {
      this.count = count
      if (this.count === 10) {
        this.count = 0
        console.log('Reseteamos count!')
      }
    }
  }
}
</script>
