<template>
  <w-tabs
    ref="tabs"
    :items="tabs.tabsCount"
    v-model="tabs.currentTab"
    :fill-bar="fillBar"
    :style="{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(' +
        require('@/assets/imgs/backgrounds/lucien-anemos-asset-sheet.jpg') +
        ')',
      backgroundPosition: 'center',
      backgroundSize: '100%',
      color: '#fff',
    }"
  >
    <template #item-title="{ index }">
      <w-input
        v-if="editingList == true"
        :label="'Inventory ' + index"
        static-label
        v-model="editedTitle"
      ></w-input>
      <label v-else-if="editingList == false" @dblclick.stop="editListName()"
        >Inventory {{ index }}</label
      >
      <w-button
        class="ml1 mr-1"
        @click.stop="tabs.splice(index - 1, 1)"
        icon="wi-cross"
        xs
      >
      </w-button>
    </template>

    <template :transition="tabs.currentTab" #item-content>
      <!-- <w-button @click="editingList = !editingList">Add/Remove</w-button> -->
      <w-flex wrap basis-zero :gap="3">
        <div class="grow">
          <w-list :items="listItems1" hover add-ids>
            <template #item="{ item }">
              <w-flex align-center justify-flex-start>
                {{ item.label }}
              </w-flex>
            </template>
          </w-list>
        </div>
      </w-flex>
    </template>

    <template #tabs-bar-extra>
      <w-button
        icon="wi-plus"
        @click="
          tabs.tabsCount++;
          tabs.currentTab = tabs.tabsCount - 1;
        "
        class="bdrsr mr2"
      >
      </w-button>
      <w-button
        icon="wi-minus"
        @click="tabs.tabsCount -= tabsCount < 1 ? 0 : 1"
        class="bdrsr mr2"
      >
      </w-button>
    </template>
  </w-tabs>
</template>

<script>
export default {
  data: () => ({
    tabs: {
      tabsCount: 1,
      transition: 'fade',
      currentTab: 1,
      inventories: []
    },
    listItems1: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4 },
      { label: 'Item 5', value: 5 }
    ],
    baseUrl: 'https://antoniandre.github.io/wave-ui/',
    editingList: false,
    editedTitle: null,
    fillBar: true
  }),
  methods: {
    editListName () {
      this.editingList = !this.editingList
      console.log(this.editingList)
    }
  },
  computed: {},
  mounted () {
    this.editListName()
  }
}
</script>

<style>
.w-input__input-wrap--underline {
  border: none;
  text-transform: uppercase;
  text-align: left;
  color: #fff;
}
.w-input__input-wrap--underline::after {
  content: none;
}
.w-input__label {
  color: #fff;
}
.w-tabs__bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 0.5rem;
  min-height: 60px;
  padding-top: 30px;
}
.w-tabs__bar-extra {
  margin-left: auto;
  position: absolute;
  top: 5px;
  right: 0px;
}
.w-tabs__bar-item {
  justify-content: flex-start;
  align-items: flex-end;
}
.w-tabs__bar-item .w-button--icon.size--xs {
  margin-top: auto;
  margin-bottom: 1px;
}
.w-tabs__slider {
  display: none;
}
</style>
