<script setup lang="ts">
const links = [
  [
    {
      label: "Dashboard",
      icon: "i-material-symbols-space-dashboard-sharp",
      to: "/dashboard",
    },
    {
      label: "Installation",
      icon: "i-heroicons-home",
    },
    {
      label: "Vertical Navigation",
      icon: "i-heroicons-chart-bar",
    },
    {
      label: "Command Palette",
      icon: "i-heroicons-command-line",
    },
  ],
];
</script>

<template>
  <UContainer :ui="{ constrained: '' }" class="dashboard h-full">
    <aside class="bg-gray-100 py-8 hidden lg:flex flex-col">
      <UVerticalNavigation :links="links" />
      <UVerticalNavigation
        class="mt-auto text-center"
        :links="[
          {
            label: 'Sign Out',
            icon: 'i-heroicons-arrow-left-start-on-rectangle',
            iconClass: 'rotate-180',
          },
        ]"
      />
    </aside>
    <section class="py-8 h-full border">
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
