<script setup lang="ts"></script>

<template>
  <UContainer
    :ui="{ constrained: '', padding: 'px-4 sm:px-0 lg:px-0' }"
    class="dashboard h-full"
  >
    <aside
      class="bg-gray-200 py-8 hidden lg:flex flex-col overflow-y-auto lg:max-h-[calc(100vh-61px)] lg:sticky lg:top-[61px] w-60 shadow-lg"
    >
      <SideNav />
    </aside>
    <section>
      <main class="py-8 h-full space-y-20 px-8">
        <PageTitle />
        <slot />
      </main>
    </section>
  </UContainer>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr;
  }
}
</style>
