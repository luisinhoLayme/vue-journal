<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Delete: defineAsyncComponent(() => import('../components/icons/Delete.vue')),
    Upload: defineAsyncComponent(() => import('../components/icons/Upload.vue')),
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
}
</script>

<template>
  <section class="relative pl-4 pr-4 pb-4 grid h-[calc(100vh-58px)] grid-cols-2 grid-rows-12">
    <header class="flex justify-between py-3 col-span-2">
      <div>
        <span class="text-success font-bold text-xl">22</span>
        <span class="mx-1">Noviembre</span>
        <span class="mx-1 font-light translate-y-[-.3rem] inline-block">2024, Viernes</span>
      </div>
      <div class="flex gap-2">
        <button class="flex items-center gap-1 px-2 py-1 bg-danger rounded-md text-white">
          Borrar
          <Delete />
        </button>
        <button class="flex items-center gap-1 px-2 py-1 bg-primary rounded-md text-white">
          Subir foto
          <Upload />
        </button>
      </div>
    </header>
    <div class="col-span-2 row-[2/8]">
      <hr class="col-span-2">
      <textarea class="w-full h-full resize-none bg-transparent outline-none rounded-md p-2" name="" id="" placeholder="Que sucedio hoy?"></textarea>
    </div>
    <div class="col-span-2 row-[8/13] mr-32 border border-gray-300 rounded-md p-2">
      <img
        class="max-w-full w-full h-full  opacity-15"
        src="../../../assets/no.avif"
        alt="entry pic">
    </div>
    <Fab icon="save" />
  </section>
</template>

<style scoped>

</style>
