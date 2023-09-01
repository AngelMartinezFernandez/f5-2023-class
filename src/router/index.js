import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      beforeEnter: () => router.push({name: 'auth.login'})
    }
  ]
})

export default router
