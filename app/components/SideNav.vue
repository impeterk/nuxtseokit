<script setup lang="ts">
const links = [
  [
    {
      label: "Dashboard",
      icon: "i-material-symbols-space-dashboard-sharp",
      to: "/dashboard",
    },
    {
      label: "Add Domain",
      icon: "i-heroicons-document-plus",
      to: "add-domain",
    },
  ],
];
</script>

<template>
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
</template>

<style scoped></style>
