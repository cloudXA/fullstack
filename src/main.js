import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import store from './store'
import element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(element)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
