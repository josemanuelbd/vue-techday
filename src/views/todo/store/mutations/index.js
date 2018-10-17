import { TodosActionTypes } from '../actionTypes'

export const TodosMutations = {
  [TodosActionTypes.ADD_ITEM] (state, item) {
    state.todos.push(item)
  },
  [TodosActionTypes.REMOVE_ITEM] (state, index) {
    state.todos.splice(index, 1)
  },
  [TodosActionTypes.COMPLETE_ITEM] (state, index) {
    state.todos[index].completed = !state.todos[index].completed
  }
}
