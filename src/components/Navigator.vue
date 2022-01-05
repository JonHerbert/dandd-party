<template>
  <w-button class="ma1" @click="openDrawer = 'left'" outline> Menu </w-button>

  <w-drawer v-model="openDrawer" flex left fit-content>
    <w-button
      @click="openDrawer = false"
      sm
      outline
      round
      absolute
      icon="wi-cross"
    >
    </w-button>
    <ul class="navbar-nav mr-auto flex" id="nav">
      <template v-if="authIsReady">
        <li
          class="nav-item"
          v-for="route in router.options.routes"
          :key="route.path"
        >
          <router-link
            v-if="route.type == 'general'"
            :to="route"
            class="nav-link"
            active-class="active"
          >
            <w-icon class="mr1" sm color="primary"> {{ route.icon }} </w-icon
            >{{ route.name }}
          </router-link>
          <ul v-if="route.path == '/characteroverview'">
            <li
              class="nav-item"
              v-for="route in characterRoutes"
              :key="route.path"
            >
              <router-link :to="route" class="nav-link" active-class="active">
                <w-icon class="mr1" sm color="primary">
                  {{ route.icon }} </w-icon
                >{{ route.name }}
              </router-link>
            </li>
          </ul>
          <ul v-if="route.path == '/dungeonmasteroverview'">
            <li class="nav-item" v-for="route in dmRoutes" :key="route.path">
              <router-link :to="route" class="nav-link" active-class="active">
                <w-icon class="mr1" sm color="primary">
                  {{ route.icon }} </w-icon
                >{{ route.name }}
              </router-link>
            </li>
          </ul>
          <ul v-if="!user && route.type == 'login'">
            <li>
              <router-link
                v-if="route.path == '/login'"
                :to="route"
                class="nav-link"
                active-class="active"
              >
                <w-icon class="mr1" sm color="primary">
                  {{ route.icon }} </w-icon
                >{{ route.name }}
              </router-link>
            </li>
            <li>
              <router-link
                v-if="route.path == '/signup'"
                :to="route"
                class="nav-link"
                active-class="active"
              >
                <w-icon class="mr1" sm color="primary">
                  {{ route.icon }} </w-icon
                >{{ route.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </template>
      <template v-if="user">
        <ul>
          <li>
            <span>Logged in as {{ user.email }}</span>
          </li>
          <li><button @click="handleClick">Logout</button></li>
        </ul>
      </template>
    </ul>
  </w-drawer>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Overview',
  setup () {
    const router = useRouter()
    const store = useStore()
    const handleClick = () => {
      store.dispatch('logout')
    }
    const characterRoutes = router.options.routes[3].children
    const dmRoutes = router.options.routes[9].children
    return {
      router,
      characterRoutes,
      dmRoutes,
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  },
  data: () => ({
    openDrawer: false
  }),
  computed: {
    position () {
      return this.openDrawer || 'right'
    }
  }
}
</script>
<style>
#nav,
#nav ul {
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  text-align: left;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  width: 100%;
  border-bottom: 1px solid #0001;
  padding: 10px 20px;
  display: inline-block;
}
li.nav-item {
  width: 100%;
}
.w-drawer {
  overflow-y: scroll;
}
</style>
