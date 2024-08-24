<script setup lang="ts"></script>

<template>
  <UContainer
    class="text-6xl font-bold text-gray-900 max-w-screen-2xl"
    :ui="{ constrained: 'max-w-7xl' }"
  >
    <h1>{{ $route.meta.title }}</h1>
  </UContainer>
</template>

<style scoped></style>
