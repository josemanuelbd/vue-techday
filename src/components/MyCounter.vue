<template>
  <div>
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
      this.$emit('onChangeCount', this.count - 1)
    },
    increment () {
      this.$emit('onChangeCount', this.count + 1)
    }
  }
}
</script>
