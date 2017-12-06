import * as getters from '@/store/modules/todo/getters'

describe('getters', () => {
  it('newTodo', () => {
    // mock state
    const state = {
      newTodo: 'todo 1'
    }

    const result = getters.newTodo(state)

    expect(result).to.equal('todo 1')
  })
  it('todos', () => {
    // mock state
    const state = {
      todoList: [
        {body: 'todo1', done: false},
        {body: 'todo2', done: true}
      ]
    }

    const result = getters.todos(state)

    expect(result).to.deep.equal([{body: 'todo1', done: false}])
  })
  it('completedTodos', () => {
    // mock state
    const state = {
      todoList: [
        {body: 'todo1', done: false},
        {body: 'todo2', done: true}
      ]
    }

    const result = getters.completedTodos(state)

    expect(result).to.deep.equal([{body: 'todo2', done: true}])
  })
})
