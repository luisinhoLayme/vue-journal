<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
}
</script>

<template>
  <div class="h-full font-bold text-2xl grid grid-rows-1 place-items-center relative">
    <h4 class="">Entrada no seleccionado</h4>
    <Fab icon="plus" />
  </div>
</template>

<style scoped>

</style>
