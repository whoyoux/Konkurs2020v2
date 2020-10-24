import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prevention',
    name: 'Prevention',
    component: () => import('../views/Prevention.vue')
  },
  {
    path: '/in_poland',
    name: 'InPoland',
    component: () => import('../views/InPoland.vue')
  },
  {
    path: '/search',
    component: () => import('../views/SearchCountry.vue')
  },
  {
    path: '/symptoms',
    component: () => import('../views/Symptoms.vue')
  },
  {
    path: '/*',
    component: Home
    //Moze kiedys 404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
