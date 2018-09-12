export const CounterMutations = {
  increment (state, payload) {
    state.count = state.count + 1
  },
  decrement (state, payload) {
    state.count = state.count - 1
  },
  resetCounter (state) {
    state.count = 0
  }
}
