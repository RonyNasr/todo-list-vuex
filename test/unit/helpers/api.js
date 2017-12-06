import axios from 'axios'

const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

mock.onPost('/todo', { body: 'new todo' }).reply(200, {
  body: 'new todo',
  done: false
})
