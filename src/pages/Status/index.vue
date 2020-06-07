<template>
  <div class="cont">
    <span class="status" v-for="(item, index) in items" :key="index" :style="{background: colors[item.status]}"></span>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      items: '',
      colors: {
        0: 'green',
        1: 'orange',
        2: 'yellow'
      }
    }
  },
  created() {
    const items = [
      {
        id: 0,
        status: 0,
      },
      {
        id: 0,
        status: 1,
      },
      {
        id: 0,
        status: 2,
      }
    ]
    this.items = items;
  },

}
</script>

<style scoped>
  .status {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: green;
  }
</style>