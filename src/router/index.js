import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'fas fa-home'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    icon: 'fas fa-dice-d20'
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue'),
    icon: 'fas fa-dice-d20'
  },
  {
    path: '/characteroverview',
    name: 'Character Overview',
    component: () => import(/* webpackChunkName: "charOver" */ '../views/Character/CharacterOverview.vue'),
    props: true,
    icon: 'fas fa-scroll',
    children: [
      {
        path: '/characterinventory',
        name: 'Character Inventory',
        component: () => import(/* webpackChunkName: "charInv" */ '../views/Character/CharacterInventory.vue'),
        icon: 'fas fa-scroll'
      },
      {
        path: '/charactersheet',
        name: 'Character Sheet',
        component: () => import(/* webpackChunkName: "charSheet" */ '../views/Character/CharacterSheet.vue'),
        icon: 'fas fa-scroll'
      },
      {
        path: '/characterstats',
        name: 'Character Stats',
        component: () => import(/* webpackChunkName: "charStats" */ '../views/Character/CharacterStats.vue'),
        icon: 'fas fa-scroll'
      },
      {
        path: '/characterproficiencies',
        name: 'Character Proficiencies',
        component: () => import(/* webpackChunkName: "charProf" */ '../views/Character/CharacterProficiencies.vue'),
        icon: 'fas fa-scroll'
      },
      {
        path: '/characternotespublic',
        name: 'Character Notes Public',
        component: () => import(/* webpackChunkName: "charNotesPublic" */ '../views/Character/CharacterNotesPublic.vue'),
        icon: 'fa fa-home'
      },
      {
        path: '/characternotesprivate',
        name: 'Character Notes Private',
        component: () => import(/* webpackChunkName: "charNotesPrivate" */ '../views/Character/CharacterNotesPrivate.vue'),
        icon: 'fas fa-scroll'
      }
    ]
  },
  {
    path: '/knowledgebase',
    name: 'Knowledge Base',
    component: () => import(/* webpackChunkName: "knowledgeBase" */ '../views/Knowledge/KnowledgeBase.vue'),
    icon: 'fas fa-dungeon'
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Party/Chat.vue'),
    icon: 'fa fa-home'
  },
  {
    path: '/groupinventory',
    name: 'Group Inventory',
    component: () => import(/* webpackChunkName: "groupInventory" */ '../views/Party/GroupInventory.vue'),
    icon: 'fa fa-home'
  },
  {
    path: '/groupnotes',
    name: 'Group Notes',
    component: () => import(/* webpackChunkName: "groupNotes" */ '../views/Party/GroupNotes.vue'),
    icon: 'fa fa-home'
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import(/* webpackChunkName: "lobby" */ '../views/Party/Lobby.vue'),
    icon: 'fa fa-home'
  },
  {
    path: '/dungeonmasteroverview',
    name: 'DM Overview',
    component: () => import(/* webpackChunkName: "dmOverview" */ '../views/DungeonMaster/DMOverview.vue'),
    icon: 'fa fa-home',
    children: [
      {
        path: '/dmfightclub',
        name: 'DM Fight Club',
        component: () => import(/* webpackChunkName: "dmFightClub" */ '../views/DungeonMaster/DMFightClub.vue'),
        icon: 'fa fa-home'
      },
      {
        path: '/dmknowledgebase',
        name: 'DM Knowledge Base',
        component: () => import(/* webpackChunkName: "dmKnowledgeBase" */ '../views/DungeonMaster/DMKnowledgeBase.vue'),
        icon: 'fa fa-home'
      },
      {
        path: '/dmcorner',
        name: 'DM Corner',
        component: () => import(/* webpackChunkName: "dmCorner" */ '../views/DungeonMaster/DMCorner.vue'),
        icon: 'fa fa-home'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
