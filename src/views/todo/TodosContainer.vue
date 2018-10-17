<template>
  <todo-list></todo-list>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'todos-container',
  components: {
    TodoList
  }
}
</script>
