import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/Todos/Todos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
  ]
})

export default router
