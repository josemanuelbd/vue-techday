<template>
  <my-counter
    :count="count"
    @onIncrement="increment"
    @onDecrement="decrement">
  </my-counter>
</template>

<script>
import { mapGetters } from 'vuex'
import MyCounter from '@/components/MyCounter.vue'

export default {
  name: 'counter',
  components: {
    MyCounter
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    increment () {
      this.$store.commit('increment')
      this.checkReset()
    },
    decrement () {
      this.$store.commit('decrement')
      this.checkReset()
    },
    checkReset () {
      if (this.count === 10) {
        this.$store.commit('resetCounter')
      }
    }
  }
}
</script>
