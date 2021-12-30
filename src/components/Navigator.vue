<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/characteroverview">Character Overview</router-link>
    <ul class="navbar-nav mr-auto flex">
      <li class="nav-item" v-for="route in routes" :key="route.path">
        <router-link :to="route" class="nav-link" active-class="active">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Overview',
  setup () {
    const router = useRouter()
    const routes = router.options.routes[2].children
    return {
      routes
    }
  }
}
</script>
<style>
#nav {
  padding: 30px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
}
div#nav ul {
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  text-align: left;
}
div#nav ul li,
div#nav a {
  padding: 5px 0px;
}
</style>
