// const actionInjector = require('inject-loader@/store/actions')
import * as mutations from '@/store/modules/todo/mutations'

describe('mutations', () => {
  it('GET_TODO', () => {
    // mock state
    const state = {
      newTodo: ''
    }
    mutations.GET_TODO(state, 'todo 1')
    expect(state.newTodo).to.equal('todo 1')
  })
  it('ADD_TODO', () => {
    // mock state
    const state = {
      todoList: [],
      newTodo: 'todo 1'
    }
    mutations.ADD_TODO(state)
    expect(state.todoList[0]).to.deep.equal({body: 'todo 1', done: false})
  })
})
