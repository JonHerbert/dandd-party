<template>
  <div id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="route in routes" :key="route">
        <router-link :to="route.path" class="nav-link" active-class="active">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { createRouter,createWebHistory} from 'vue-router'
export default {
  name: 'Overview',
  setup () {
    const routes = function () {
      var paths = []
      for (var i in this.$router.options.routes[2].children) {
        var route = this.$router.options.routes[2].children[i]
        paths.push(route)
      }
    }
    return {
      routes
    }
  }
}
</script>

<style>
</style>
