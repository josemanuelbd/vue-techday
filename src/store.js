import Vue from 'vue'
import Vuex from 'vuex'
import { CounterModule } from './views/counter/store/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CounterModule
  }
})
