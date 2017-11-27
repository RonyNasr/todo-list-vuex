// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  todoList: []
}

// define the possible mutations that can be applied to our state
const mutations = {
  ADD_TODO (state, text) {
    const newTodo = {
      text: text,
      done: false
    }
    // only mutators can mutate the state
    state.todoList.push(newTodo)
  }
}

const getters = {
  all: state => state.todoList
}

const actions = {
  addTodo: ({ commit }, text) => commit('ADD_TODO', text)
}
// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
