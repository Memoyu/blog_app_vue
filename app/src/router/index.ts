import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/home.vue'
import Category from '../views/category/category.vue'
import Tag from '../views/tag/tag.vue'
import Friend from '../views/friend/friend.vue'
import Message from '../views/message/message.vue'
import About from '../views/about/about.vue'
import Article from '../views/article/article-detail.vue'
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
    path: '/article/:id',
    name: 'Article',
    component: Article
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
