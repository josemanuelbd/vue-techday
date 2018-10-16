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
import { CounterActionTypes } from './store/actionTypes'

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
      this.$store.commit(CounterActionTypes.INCREMENT)
      this.checkReset()
    },
    decrement () {
      this.$store.commit(CounterActionTypes.DECREMENT)
      this.checkReset()
    },
    checkReset () {
      if (this.count === 10) {
        this.$store.commit(CounterActionTypes.RESET_COUNTER)
      }
    }
  }
}
</script>
