<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  }
}
</script>

<template>
  <div class="pt-2 pr-2 mb-2">
    <input
      type="text"
      class="outline-none border border-gray-300 p-2 w-full rounded-md focus:border-gray-900"
      placeholder="Buscar entrada"
    />
  </div>
  <div class="h-[calc(100vh-117px)] overflow-scroll">
    <Entry
      v-for="item in 50"
      :key="item"
    />
  </div>
</template>

<style scoped>

</style>
