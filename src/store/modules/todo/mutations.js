// import state from 'state'

export const GET_TODO = (state, todo) => {
  state.newTodo = todo
}

export const ADD_TODO = (state) => {
  // only mutators can mutate the state
  state.todoList.push({body: state.newTodo, done: false})
}

export const EDIT_TODO = (state, todo) => {
  var todos = state.todoList
  todos.splice(todos.indexOf(todo), 1)
  state.todoList = todos
  state.newTodo = todo.body
}

export const REMOVE_TODO = (state, todo) => {
  var todos = state.todoList
  todos.splice(todos.indexOf(todo), 1)
}

export const COMPLETE_TODO = (state, todo) => {
  todo.done = !todo.done
}

export const CLEAR_TODO = (state) => {
  state.newTodo = ''
}
