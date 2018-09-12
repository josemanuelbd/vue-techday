import { initialState } from '../state'
import { CounterMutations } from '../mutations'
import { CounterActions } from '../actions'
import { CounterGetters } from '../getters'

export const CounterModule = {
  state: initialState,
  mutations: CounterMutations,
  actions: CounterActions,
  getters: CounterGetters
}
