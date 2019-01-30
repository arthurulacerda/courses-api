import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import VueResource from 'vue-resource'
import App from './App.vue'
import Routes from './routes.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
