import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/characterinventory',
    name: 'CharacterInventory',
    component: () => import(/* webpackChunkName: "charInv" */ '../views/Character/CharacterInventory.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
