<template>
  <div class="my-counter">
    <button @click="decrement"> - </button>
    <span>{{ count }}</span>
    <button @click="increment"> + </button>
    <br>
    <span>{{ oddEven }}</span>
  </div>
</template>

<script>
export default {
  name: 'my-counter',
  props: [
    'initialCount'
  ],
  data: function () {
    return {
      count: this.initialCount
    }
  },
  computed: {
    oddEven: function () {
      return (this.count % 2 === 0 ? 'par' : 'impar')
    }
  },
  watch: {
    initialCount: function (newValue) {
      this.count = newValue
    }
  },
  methods: {
    decrement () {
      this.count -= 1
      this.isCounterValueTen()
    },
    increment () {
      this.count += 1
      this.isCounterValueTen()
    },
    isCounterValueTen () {
      if (this.count === 10) {
        this.$emit('onCounterValueIsTen')
      }
    }
  }
}
</script>
