<template>
  <li>
    <input type="checkbox" :value="item.completed" @click="completeItem">
    <span :class="{ completed: item.completed }">{{ item.name }}</span>
    <span @click="removeItem"> x </span>
  </li>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>

<script>
export default {
  name: 'todo-item',
  props: [
    'item'
  ],
  methods: {
    completeItem () {
      this.$emit('onCompleteItem')
    },
    removeItem () {
      this.$emit('onRemoveItem')
    }
  }
}
</script>
