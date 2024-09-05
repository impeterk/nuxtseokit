<script setup lang="ts">
useTitle("Domain Overview");

const currentOrg = useCurrentOrg();
</script>

<template>
  <section class="layout">
    <UCard class="mx-0" as="main">
      <div
        class="flex p-4 items-center justify-between bg-gray-100 rounded-t-lg"
      >
        <h3 class="text-xl font-medium">{{ currentOrg }} Domains</h3>
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Filter domains..."
        />
      </div>
      <DomainsTable />
    </UCard>
    <DomainsAside />
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 2rem;
}
</style>
