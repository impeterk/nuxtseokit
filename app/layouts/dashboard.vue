<script setup lang="ts"></script>

<template>
  <UContainer
    :ui="{ constrained: '', padding: 'px-4 sm:px-0 lg:px-0' }"
    class="dashboard h-full"
  >
    <aside class="bg-gray-100 py-8 hidden lg:flex flex-col">
      <SideNav class="shrink-0" />
    </aside>
    <section class="py-8 h-full border space-y-20">
      <PageTitle />
      <slot />
    </section>
  </UContainer>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr;
  }
}
</style>
