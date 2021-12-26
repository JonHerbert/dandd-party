<template>
  <w-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/characterinventory">Character Inventory</router-link>
      <ul
        class="list-unstyled components"
        :v-for="
          (route, index) in
          $router.options.routes.filter((x) => x.path == $route.matched[0].path)
        "
      >
        <li :v-for="child in route.children">
          <a class="nav-item" :key="index">
            <router-link
              :to="route.path + '/' + child.path"
              exact-active-class="active"
            >
              <icon :icon="route.icon" class="mr-2" /><span>{{
                child.name
              }}</span>
            </router-link>
          </a>
        </li>
      </ul>
    </div>
    <router-view />
  </w-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
