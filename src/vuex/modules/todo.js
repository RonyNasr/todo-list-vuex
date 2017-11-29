export default {
  // the root, initial state object
  state: {
    todoList: [],
    newTodo: ''
  },

  // define the possible mutations that can be applied to our state
  mutations: {
    GET_TODO (state, todo) {
      state.newTodo = todo
    },
    ADD_TODO (state) {
      // only mutators can mutate the state
      state.todoList.push({body: state.newTodo, done: false})
    },
    EDIT_TODO (state, todo) {
      var todos = state.todoList
      todos.splice(todos.indexOf(todo), 1)
      state.todoList = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO (state, todo) {
      var todos = state.todoList
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO (state, todo) {
      todo.done = !todo.done
    },
    CLEAR_TODO (state) {
      state.newTodo = ''
    }
  },

  actions: {
    getTodo: ({commit}, todo) => commit('GET_TODO', todo),
    addTodo: ({ commit }) => commit('ADD_TODO'),
    editTodo: ({commit}, todo) => commit('EDIT_TODO', todo),
    removeTodo: ({commit}, todo) => commit('REMOVE_TODO', todo),
    completeTodo: ({commit}, todo) => commit('COMPLETE_TODO', todo),
    clearTodo: ({commit}) => commit('CLEAR_TODO')
  },

  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todoList.filter((todo) => { return !todo.done }),
    completedTodos: state => state.todoList.filter((todo) => { return todo.done })
  }
}
