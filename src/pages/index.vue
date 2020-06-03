<template>
  <div class="cont">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :label="preLabel" name="first">
        <Todos></Todos>
      </el-tab-pane>
      <el-tab-pane :label="nextLabel" name="second">
        <Post></Post>
      </el-tab-pane>
    </el-tabs>
  </div>
  
</template>
<script>
  import Post from './posts/post'
  import Todos from './Todos/home'

  export default {
    data() {
      return {
        activeName: 'first',
        preLabel: '待办事项',
        nextLabel: '发表文章'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      Post,
      Todos
    }
  };
</script>

<style scoped>
  .cont >>> .el-tabs__item.is-active {
    color: #338e06;
  }
  .cont >>> .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #409eff;
}
</style>