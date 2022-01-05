import { createStore } from 'vuex'

// firebase imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    // AUTH
    user: null,
    authIsReady: false,

    // INVENTORY
    inventories: []
  },
  mutations: {
    // AUTH
    setUser (state, payload) {
      state.user = payload
      console.log('user state changed: ', state.user)
    },
    setAuthIsReady (state, payload) {
      state.authIsReady = payload
    },
    // INVENTORY
    addToInventory (state, payload) {
      state.inventories.push(payload)
    },
    removeFromInventory (state, payload) {
      state.inventories.pop(payload)
    }
  },
  // Async code goes here ->
  actions: {
    // AUTH
    async signup (context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('Could not complete signup, please try again in a few minutes')
      }
    },
    async login (context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('Could not complete login')
      }
    },
    async logout (context) {
      await signOut(auth)
      context.commit('setUser', null)
    }
  },
  modules: {
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store
