import { CounterActionTypes } from '../actionTypes'

export const CounterMutations = {
  [CounterActionTypes.INCREMENT] (state, payload) {
    state.count = state.count + 1
  },
  [CounterActionTypes.DECREMENT] (state, payload) {
    state.count = state.count - 1
  },
  [CounterActionTypes.RESET_COUNTER] (state) {
    state.count = 0
  }
}
