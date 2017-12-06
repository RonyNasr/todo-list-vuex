// const actionInjector = require('inject-loader@/store/actions')
import * as actions from '@/store/modules/todo/actions'
import { testAction } from '../../helpers'
require('../../helpers/api')

describe('actions', () => {
  it('getTodo from input text', (done) => {
    const state = {
      newTodo: null
    }
    testAction(
      actions.getTodo,
      'new todo',
      state,
      [
        {type: 'GET_TODO', payload: 'new todo'}
      ],
    done)
  })
  it('addTodo to the todoList', (done) => {
    const state = {
      newTodo: 'new todo',
      todoList: []
    }
    testAction(
      actions.addTodo,
      null,
      state,
      [
        {type: 'ADD_TODO'}
      ],
    done)
  })
  it('editTodo', (done) => {
    const state = {
      newTodo: 'new todo',
      todoList: []
    }
    testAction(
      actions.editTodo,
      {body: 'new todo', done: false},
      state,
      [
        {type: 'EDIT_TODO', payload: {body: 'new todo', done: false}}
      ],
    done)
  })
})
