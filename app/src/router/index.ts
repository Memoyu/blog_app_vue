import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Tag from '../views/Tag.vue'
import Friend from '../views/Friend.vue'
import MessageBoard from '../views/MessageBoard.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/messageboard',
    name: 'MessageBoard',
    component: MessageBoard
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
