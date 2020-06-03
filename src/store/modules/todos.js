import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
}

const actions = {
  // async fetchTodos({commit}) {
  //   const response = await this.$axios.get(
  //     'https://jsonplaceholder.typicode.com/todos'
  //   );

  //   //更改vuex的store状态的唯一方法是提交mutation. commit的第二个参数为载荷
  //   commit('setTodos', response.data) 

  //   console.log(response.data,'store')
  // }

  // 获取todo列表数据
  fetchTodos({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=> {
          commit('setTodos', response.data)
        })
      
  },

  // 新增todo数据
  addTodos({commit}, title) {
      axios.post('https://jsonplaceholder.typicode.com/todos',{title: title, completed: false}) //axios默认传递的可以使{title}即{title: title}
        .then((response) => {
          commit('addTodos', response.data)
        })
  },

  // 删除todo数据
  removeTodos({commit}, id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //根本就没有请求成功
    commit('removeTodos',id)
  },

  //筛选数据
  filterTodos({commit}, e) {
    // console.log(e.target.options[e.target.options.selectedIndex].value)
    let limit = e.target.options[e.target.options.selectedIndex].value;
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then((response) => {
      commit('setTodos', response.data)
    })
  },

  // 更新todos
  updateTodos({commit}, updTodo) {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
    .then(response => {
      commit('updateTodo', response.data)
    })
  }

}

// vuex的mutation非常类似于事件，每个mutation都有一个字符串的事件类型type和一个回调函数(handler)
// 这个回调函数(handler)实际进行状态更改的地方state作为第一个参数，接收第二个参数载荷(payload)
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),  //遍历列表
  addTodos: (state, todo) => state.todos.unshift(todo),  //新增todo
  removeTodos: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)), //本地删除
  updateTodo: (state, upTodo) => { //替换双击的todo，使用调用参数后返回的todo
    const index = state.todos.findIndex(todo => todo.id === upTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, upTodo) //在点击的索引位置替换成返回的元素
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}