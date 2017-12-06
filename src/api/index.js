import axios from 'axios'

export const storeTodo = (payload) => {
  return axios.post('url', payload)
}
