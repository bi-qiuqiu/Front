import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import NotFound from '@/views/NotFound'
import Home from '@/views/home'
import My from '@/views/my'
import Qa from '@/views/qa'
import Video from '@/views/video'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/my',
        name: 'my',
        component: My
      },
      {
        path: '/qa',
        name: 'qa',
        component: Qa
      },
      {
        path: '/video',
        name: 'video',
        component: Video
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
