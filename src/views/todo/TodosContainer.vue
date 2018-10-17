<template>
  <todo-list></todo-list>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'todo-container',
  components: {
    TodoList
  }
}
</script>
