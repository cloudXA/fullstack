<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" name="addtodo"  v-model="title" placeholder="add todos...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from  'vuex'

export default {
  name: 'AddTodos',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodos']),  //将addTodo从vuex中action中解构出来
    onSubmit() {
      this.addTodos(this.title);
    }
  }
}
</script>

<style>
  form {
    display: flex;
    margin-bottom: 10px;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: none;
  }

  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883;
    cursor: pointer;
  }
</style>