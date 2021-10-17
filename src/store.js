import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2,
    message: ""
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state * 3,
    meesage: state => state.message
  },
  mutations: {
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: {
    increment(constext, number) {
      constext.commit('increment', number)
    },
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage)
    }
  },
})