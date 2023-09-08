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
      beforeEnter: async (to, from, next) => {
        // en el método beforeEnter podemos gestionar si tenemos permisos, rol, etc
        // y si no se tiene pues redireccionamos a donde proceda
        await router.push({name: 'auth.login'})
      },
    },
    authRoutes,
    productRoutes,
    cartRoutes
  ]
})

export default router
