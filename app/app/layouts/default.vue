<script setup lang="ts">
useHead({
  titleTemplate: "%s - SEO Kit",
});
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app {
  @apply font-sans;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
