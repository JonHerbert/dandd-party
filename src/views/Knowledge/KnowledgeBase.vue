<template>
  <div>
    <input
      v-model.trim="search"
      type="search"
      class="form-control"
      placeholder="Search Topic..."
      aria-label="Search"
    />
  </div>
  <div>{{ search }}</div>
  <!-- <div>{{ searchFunction }}</div>
  <div v-for="key in searchFunction" :key="key">
    <div>{{ key }}</div>
  </div> -->
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup () {
    const store = useStore()
    store.dispatch('returnDatabase')
    const db = store.state.database
    const search = ref('')
    // const searchFunction = computed(() => {
    //   if (!search.value) {
    //     return db
    //   } else {
    //     const filter = Object.entries(db).filter(
    //       ([key, value]) => key === search.value
    //     )
    //     return filter
    //   }
    // })
    const jsonGetAllKeys = computed((db) => {
      return db.reduce(
        (keys, obj) =>
          keys.concat(
            Object.keys(obj).filter((key) => keys.indexOf(key) === -1)
          ),
        []
      )
    })
    console.log(jsonGetAllKeys)
    return {
      db,
      search
      // searchFunction
    }
  }
}
</script>

<style>
</style>
