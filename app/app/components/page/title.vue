<script setup lang="ts"></script>

<template>
  <div
    class="text-6xl font-bold text-gray-900"
    :class="$route.meta?.titleOptions?.class"
  >
    <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<style scoped></style>
