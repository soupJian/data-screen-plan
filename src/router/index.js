import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    name: 'Home',
    component: Index
  },
  {
    path: '/document',
    name: 'Document',
    component: () => import('../views/Document/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
