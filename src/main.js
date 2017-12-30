import Vue from 'vue'

import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

//axios
Vue.prototype.$axios = axios

//css
import "./statics/css/phoneMax.css"

//App.vue
import App from './App.vue'

//router
import home from '@/home/home'

const router = new VueRouter({
  routes : [
      { path: '/', redirect:'/home' },
      { path: '/home', component: home },

  ]
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
