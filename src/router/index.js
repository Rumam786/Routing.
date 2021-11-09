import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pagenotfound from '../views/pagenotfound.vue'
import user from '../views/user.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/settings.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')
  },
  {
    path: '*',
    name: 'pagenotfound',
    component: pagenotfound
  },
  {
    path: '/user/:id',
    component: user
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
