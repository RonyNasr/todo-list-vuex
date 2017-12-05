import * as todo from '@/store/modules/todo'
import { testAction } from '../helpers'

describe('mutations', () => {
  it('GET_TODO', () => {
    // mock state
    const state = {
      newTodo: ''
    }
    todo.default.mutations.GET_TODO(state, 'todo 1')
    expect(state.newTodo).to.equal('todo 1')
  })
  it('ADD_TODO', () => {
    // mock state
    const state = {
      todoList: [],
      newTodo: 'todo 1'
    }
    todo.default.mutations.ADD_TODO(state)
    expect(state.todoList[0]).to.deep.equal({body: 'todo 1', done: false})
  })
})

describe('getters', () => {
  it('newTodo', () => {
    // mock state
    const state = {
      newTodo: 'todo 1'
    }

    const result = todo.default.getters.newTodo(state)

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

    const result = todo.default.getters.todos(state)

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

    const result = todo.default.getters.completedTodos(state)

    expect(result).to.deep.equal([{body: 'todo2', done: true}])
  })
})

describe('actions', () => {
  it('getTodo from input text', (done) => {
    const state = {
      newTodo: null
    }
    testAction(
      todo.default.actions.getTodo,
      'new todo',
      state,
      [
        {type: 'GET_TODO', payload: 'new todo'}
      ],
    done)
  })
})
