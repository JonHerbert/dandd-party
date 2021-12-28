<template>
  <div>
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
</template>

<script>

export default {
  setup () {
    console.log($router.options.route)
  }
}
</script>

<style>
</style>
