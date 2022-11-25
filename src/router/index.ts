import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homePage from '../views/home-page.vue'
import todoPage from '../views/todo-page.vue'
import routerNames from '../constant/router-name'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routerNames.HOME,
    component: homePage
  },
  {
    path: '/todoList',
    name: routerNames.TODOLIST,
    component: todoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
