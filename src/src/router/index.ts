import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home.vue")

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router