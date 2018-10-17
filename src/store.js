import Vue from 'vue'
import Vuex from 'vuex'
import { TodosModule } from './views/todo/store/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TodosModule
  }
})
