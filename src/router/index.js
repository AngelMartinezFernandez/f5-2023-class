import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from "@/modules/auth/router";
import productRoutes from "@/modules/product/router";
import cartRoutes from "@/modules/cart/router";
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
    productRoutes,
    cartRoutes
  ]
})

export default router
