<script>
import Logout from './icons/Logout.vue'

export default {
  components: {
    Logout,
  }
}
</script>

<template>
  <nav class="bg-primary p-3 flex justify-between items-center">
    <a href="/" class="text-white flex items-center">
      <img src="@/assets/logo.svg" alt="logo" class="w-5">
      <span class="ml-2">Daybook</span>
    </a>
    <button
      class="border border-info text-info py-2 px-2 rounded-md hover:bg-info hover:text-white transition"
    >
      <Logout />
    </button>
  </nav>
</template>

<style scoped>

</style>
