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
    path: '/characteroverview',
    name: 'Character Overview',
    component: () => import(/* webpackChunkName: "charOver" */ '../views/Character/CharacterOverview.vue'),
    props: true,
    children: [
      {
        path: '/characterinventory',
        name: 'Character Inventory',
        component: () => import(/* webpackChunkName: "charInv" */ '../views/Character/CharacterInventory.vue')
      },
      {
        path: '/charactersheet',
        name: 'Character Sheet',
        component: () => import(/* webpackChunkName: "charSheet" */ '../views/Character/CharacterSheet.vue')
      },
      {
        path: '/characterstats',
        name: 'Character Stats',
        component: () => import(/* webpackChunkName: "charStats" */ '../views/Character/CharacterStats.vue')
      },
      {
        path: '/characterproficiencies',
        name: 'Character Proficiencies',
        component: () => import(/* webpackChunkName: "charProf" */ '../views/Character/CharacterProficiencies.vue')
      },
      {
        path: '/characternotespublic',
        name: 'Character Notes Public',
        component: () => import(/* webpackChunkName: "charNotesPublic" */ '../views/Character/CharacterNotesPublic.vue')
      },
      {
        path: '/characternotesprivate',
        name: 'Character Notes Private',
        component: () => import(/* webpackChunkName: "charNotesPrivate" */ '../views/Character/CharacterNotesPrivate.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
