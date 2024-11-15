<script>

export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>

<template>
  <main >
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h2 class="text-success">Home view</h2>
    </div>

    <div class="flex gap-3">
      <button @click="goToDayBook" class="bg-primary px-2 py-1 rounded">Primary</button>
      <button @click="goToDayBook" class="bg-secondary px-2 py-1 rounded">Secondary</button>
      <button @click="goToDayBook" class="bg-success px-2 py-1 rounded">Success</button>
    </div>
  </main>
</template>
