import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' // 👈 Эта строка скажет роутеру: "если открыли корень, перенаправь на /home"
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
})

export default router
