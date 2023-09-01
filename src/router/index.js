import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from "@/modules/auth/router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      beforeEnter: async () => {
        await router.push({name: 'auth.login'})
      },
    },
    authRoutes
  ]
})

export default router
