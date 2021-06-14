import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addTask (state,  formData) {
      state.list.push(formData)
      console.log(state.list)
    }      
  },
  actions: {
  },
  modules: {
  }
})
