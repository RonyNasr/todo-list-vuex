<template>
  <div class="hello">
    <h1>Todo List</h1>
    <div class="list-actions">
      <input v-model="taskText">
      <button type="button" name="button" @click="addTodo(taskText)">Add a Task</button>
    </div>

    <div class="">
      <ul v-for="todo in $store.state.todoList">
          <li>{{todo.text}}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { addTodo } from '../vuex/actions'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data () {
    return {
      taskText: '',
      todos: []
    }
  },
  computed: mapGetters ([
    'all'
  ]),
  methods: mapActions ([
    'addTodo'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.list-actions {
  width:100%;
  height: 50px;
}
</style>
