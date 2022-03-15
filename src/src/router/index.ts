import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index.vue")
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("@/views/article/index.vue")
  },
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: () => import("@/views/article/detail/index.vue")
  },
  {
    path: "/friend",
    name: "Friend",
    component: () => import("@/views/friend/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router