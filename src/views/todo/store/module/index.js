import { initialState } from '../state'
import { TodosMutations } from '../mutations'
import { TodosGetters } from '../getters'

export const TodosModule = {
  state: initialState,
  mutations: TodosMutations,
  getters: TodosGetters
}
