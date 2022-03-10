import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    name: "Home",
    redirect: "/home",
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home.vue'),
        name: 'Home'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router