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
    'count'
  ],
  computed: {
    oddEven: function () {
      return (this.count % 2 === 0 ? 'par' : 'impar')
    }
  },
  methods: {
    decrement () {
      this.$emit('onDecrement')
    },
    increment () {
      this.$emit('onIncrement')
    }
  }
}
</script>
