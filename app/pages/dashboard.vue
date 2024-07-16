<script setup lang="ts">
const title = "Dashboard";
useSeoMeta({
  title,
});
const route = useRoute();
route.meta.title = title;
</script>

<template>
  <NuxtLayout name="dashboard">
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
