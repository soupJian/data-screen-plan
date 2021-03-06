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
    component: () => import('../views/Document/Index.vue'),
    children:[
      {
        path: '/document',
        redirect: '/document/dashboard'
      },
      {
        path: '/document/:textId',
        component: ()=> import('../views/Document/DocumentItem.vue')
      }
    ]
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example/Index.vue'),
    // children:[
    //   {
    //     path: '/example',
    //     redirect: '/example/defaultpie'
    //   },
    //   {
    //     path: '/example/:chartId',
    //     component: ()=> import('../views/Document/DocumentItem.vue')
    //   }
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
