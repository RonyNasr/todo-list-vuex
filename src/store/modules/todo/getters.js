// console.log(state)
export const newTodo = (state) => state.newTodo
export const todos = (state) => state.todoList.filter((todo) => { return !todo.done })
export const completedTodos = (state) => state.todoList.filter((todo) => { return todo.done })
