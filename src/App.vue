<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app {
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 2rem;
  }
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
</style>
