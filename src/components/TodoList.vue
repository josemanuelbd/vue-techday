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
import { mapGetters } from 'vuex'
import { TodosActionTypes } from '@/views/todo/store/actionTypes'

export default {
  name: 'todo-list',
  data: function () {
    return {
      item: null
    }
  },
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  methods: {
    addItem (item) {
      this.$store.commit(TodosActionTypes.ADD_ITEM, { name: this.item, completed: false })
    },
    completeItem (index) {
      this.$store.commit(TodosActionTypes.COMPLETE_ITEM, index)
    },
    removeItem (index) {
      this.$store.commit(TodosActionTypes.REMOVE_ITEM, index)
    }
  }
}
</script>
