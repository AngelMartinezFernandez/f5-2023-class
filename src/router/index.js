import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from "@/modules/auth/router";
import productRoutes from "@/modules/product/router";
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
    authRoutes,
    productRoutes
  ]
})

export default router
