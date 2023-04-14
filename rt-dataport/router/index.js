// "vue-router": "^3.1.3" - used in Dataport

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/main/Home.vue'
import LoginPage from '../views/login/LoginPage.vue'

import '../css/style.less'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'home',
      component: Home
  },
  {
      path: '/login',
      name: 'login',
      component: LoginPage
  },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
