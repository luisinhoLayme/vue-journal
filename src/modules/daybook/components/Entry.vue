<script>
</script>

<template>
  <article
    class="mb-2 cursor-pointer p-3 border border-dark rounded hover:bg-gray-200 transition-colors"
    @click="$router.push({ name: 'entry', params: { id: 12 } })"
  >
    <div>
      <span class="text-success font-bold text-xl">22</span>
      <span class="mx-1">Noviembre</span>
      <span class="mx-1 font-light translate-y-[-.3rem] inline-block">2024, Viernes</span>
    </div>
    <div>
      <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores voluptatibus fuga corporis! Quia veniam non molestias modi suscipit illum nulla temporibus tempore dolor ad libero aspernatur eaque, iure voluptate.</p>
    </div>
  </article>
</template>

<style scoped>

</style>
