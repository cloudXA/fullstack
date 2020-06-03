<template>
  <div class="cont">
    <h1>Latest Posts</h1>
    <!-- create post head  -->
    <div class="create-post"> 
      <label for="create-post">say something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post">
      <button @click="createPost">添加文章</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index = "index"
        v-bind:key="post._id"
        @dblclick="deletePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="text" >{{ post.text }}</p>
      </div>
    </div>
  </div>  
</template>
 
<script>
import  PostServer from '../../PostServers.js';

export default {
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostServer.getPosts();

    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    async createPost() {
      await PostServer.insertPost(this.text);
      this.posts = await PostServer.getPosts();
    },
    async deletePost(id) {
      await PostServer.deletePost(id);
      this.posts = await PostServer.getPosts();
    }
  }
}
</script>

<style>
  .cont {
    text-align: center;
  }
  .posts-container {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;;
    
  }
  .post {
    background: #41b883;
    padding: 1.5rem;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
</style>