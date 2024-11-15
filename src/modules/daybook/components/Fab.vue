<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    icon: {
      type: String,
      default: 'plus'
    }
  },
  components: {
    Plus: defineAsyncComponent(() => import('./icons/Plus.vue')),
    Save: defineAsyncComponent(() => import('./icons/Save.vue')),
  }
}
</script>

<template>
  <button
    class="bg-primary text-white rounded-full w-12 h-12 flex justify-center items-center absolute bottom-6 right-6"
  >
    <Plus v-if="icon === 'plus'" />
    <Save v-else-if="icon === 'save'" />
  </button>
  <!-- <button -->
  <!--   class="bg-primary text-white rounded-full w-12 h-12 flex justify-center items-center absolute bottom-6 right-6" -->
  <!--   v-else -->
  <!-- > -->
  <!--   <Save /> -->
  <!-- </button> -->
</template>

<style scoped>
/* button > svg { */
/*   --s: 20px; */
/*   width: var(--s); */
/*   height: var(--s); */
/* } */
</style>
