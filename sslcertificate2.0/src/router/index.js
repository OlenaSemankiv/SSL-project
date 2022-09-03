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
    path: '/contact',
    name: 'Contact',
    
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    
    component: () => import( '../views/FAQ.vue')
  },
  {
    path: '/ssl',
    name: 'SSL',
    
    component: () => import( '../views/SSL.vue')
  },
  {
    path: '/PrivatePol',
    name: 'PrivatePol',
    
    component: () => import( '../views/PrivatePol.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

