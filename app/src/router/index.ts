import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Category from '../views/category.vue'
import Tag from '../views/tag.vue'
import Friend from '../views/friend.vue'
import Message from '../views/message.vue'
import About from '../views/about.vue'
import Test from '../views/test.vue'

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
    path: '/message',
    name: 'Message',
    component: Message
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
