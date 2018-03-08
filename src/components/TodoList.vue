<template>
  <div class="hello">
    <div id="title_anchor" ></div>
    <div id="page_title" :class="affix ? 'affix' : ''" class="list-actions"></div>
    <h1 >Todo List</h1>
    <div class="list-actions">
      <input :value="newTodo" @change="getTodo()" placeholder="I need to...">
      <button type="button" name="button" @click="addTodo()">Add Todo</button>
    </div>

    <div class="">
      <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
      <ul>
        <li v-for="todo in todos">
          <div>
              {{todo.body}}&nbsp;
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
      <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
      <ul>
        <li v-for="todo in completed">
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
import { mapGetters } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data () {
    return {
      affix: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapGetters({
      newTodo: 'newTodo',
      todos: 'todos',
      completed: 'completedTodos'
    })
  },
  methods: {
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo () {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    },
    edit (todo) {
      this.$store.dispatch('editTodo', todo)
    },
    complete (todo) {
      this.$store.dispatch('completeTodo', todo)
    },
    remove (todo) {
      this.$store.dispatch('removeTodo', todo)
    },
    handleScroll: function (event) {
      var scrollTop = window.document.body.scrollTop
// console.log(window.document.getElementById("title_anchor").styles)
      var titleAnchor = window.document.getElementById('title_anchor').getBoundingClientRect().top
      var offsetTop = window.document.getElementById('page_title').getBoundingClientRect().top
      console.log(scrollTop + ', ' + titleAnchor)
      if (scrollTop >= titleAnchor) {
        this.affix = true
      } else if (scrollTop < titleAnchor) {
        this.affix = false
      }
      console.log(this.affix)
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
  display: block;
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

#title_anchor {
  height: 0px;
  width: 100%;
}

.affix {
  border-bottom: 3px solid #F1F1F1;
  position : fixed;
  top: 20px;
  z-index: 1000;
  background-color: #000000;
}
</style>
