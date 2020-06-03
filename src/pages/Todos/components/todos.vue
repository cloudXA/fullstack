<template>
  <div>
    <div class="todos">
      <div 
        class="todo" 
        v-for="(todo,index) in allTodos" 
        :key="index" 
        @dblclick ="onDbclick(todo)"
        v-bind:class ="{'is-complete': todo.complted}"
        >
        {{todo.title}}
        <svg @click="removeTodos(todo.id)" t="1590853554970" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1155" width="20" height="20"><path d="M896 196.923077H649.846154V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231h-118.153846c-43.323077 0-78.769231 35.446154-78.769231 78.769231v78.769231H128c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h768c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 137.846154c0-11.815385 7.876923-19.692308 19.692308-19.692308h78.76923c11.815385 0 19.692308 7.876923 19.692308 19.692308v59.076923h-118.153846V137.846154z m364.307692 256h-610.461538c-15.753846 0-29.538462 13.784615-29.538462 29.538461V886.153846c0 55.138462 43.323077 98.461538 98.461539 98.461539h472.615384c55.138462 0 98.461538-43.323077 98.461539-98.461539V423.384615c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 827.076923c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z m196.923077 0c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z" p-id="1156"></path></svg>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';



export default {
  name: 'Todos',
  data() {
    return {
       
    }
  },
  created() {
    this.fetchTodos()
  },
  methods: {
    ...mapActions(["fetchTodos", "removeTodos", "updateTodos"]),
    onDbclick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        complted: !todo.complted
      }
      this.updateTodos(updTodo)
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
}
</script>

<style>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1.5rem;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer; 
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>