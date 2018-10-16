<template>
  <div>
    <input v-model="item"><button @click="addItem">Añadir</button>
    <ul>
      <todo-item
        :item="todo"
        v-for="(todo, index) in todos"
        :key="index"
        @onCompleteItem="completeItem(index)"
        @onRemoveItem="removeItem(index)">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'todo-list',
  data: function () {
    return {
      item: null,
      todos: []
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addItem (item) {
      this.todos.push({ name: this.item, completed: false })
    },
    completeItem (index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    removeItem (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
