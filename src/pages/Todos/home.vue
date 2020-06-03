<template>
  <div>
    <add-todos></add-todos>
    <filter-todo></filter-todo>
    <Todos></Todos>
  </div>
</template>

<script>
import Todos from './components/todos'
import AddTodos from './components/addTodos'
import FilterTodo from './components/filterTodos'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodos,
    FilterTodo
  }
}
</script>

<style>

</style>