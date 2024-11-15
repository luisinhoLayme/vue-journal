<script>
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  }
}
</script>

<template>
  <Navbar />

  <section class="grid grid-cols-[1fr_2fr]">
    <div class="pl-2 border border-r-indigo-300">
      <EntryList />
    </div>
    <div class="">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>

</style>
