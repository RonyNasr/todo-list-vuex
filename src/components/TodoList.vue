<template>
  <div class="hello">
    <h1>Todo List</h1>
    <div class="list-actions">
      <input :value="newTodo" @change="getTodo" placeholder="I need to...">
      <button type="button" name="button" @click="addTodo">Add Todo</button>
    </div>

    <div class="">
      <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
      <ul v-for="todo in todos">
        <li>{{todo.body}}&nbsp;
          <div class="btn-group">
              <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-edit"></span> Edit
              </button>
              <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-ok-circle"></span> Complete
              </button>
              <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-remove-circle"></span> Remove
              </button>
            </div>
        </li>
      </ul>
    </div>
    <div class="">
      <h3 v-if="todos.length > 0">Completed({{completed.length}})</h3>
      <ul v-for="todo in completed">
        <li class="list-group-item">
          {{todo.body}} &nbsp;
          <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-remove-circle"></span> Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed:{
    newTodo () {
      return this.$store.getters.newTodo
    },
    todos(){
      return this.$store.getters.todos
    },
    completed(){
      return this.$store.getters.completedTodos
    }
  },
  methods: {
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo () {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    },
    edit(todo){
      this.$store.dispatch('editTodo', todo)
    },
    complete(todo){
      this.$store.dispatch('completeTodo', todo)
    },
    remove(todo){
      this.$store.dispatch('removeTodo', todo)
    },
    remove(todo){
      this.$store.dispatch('removeTodo', todo)
    }
  }
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

.btn-group{
    float: right;
}
</style>
