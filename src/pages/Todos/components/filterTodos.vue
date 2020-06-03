<template>
  <div>
    筛选Todos
    <select name="" id="filter" @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
    <span>
      <span class="incomplete-box"></span>  = Incomplte
    </span>
    <span>
      <span class="complete-box"></span>  = Complete
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(["filterTodos"])
  }
}
</script>

<style>
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
</style>