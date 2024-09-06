<script setup lang="ts">
useTitle("Domain Overview");

const currentOrg = useCurrentOrg();
</script>

<template>
  <section class="layout">
    <UCard
      class="mx-0"
      as="main"
      :ui="{
        header: {
          background: 'bg-primary-400 ',
          base: 'overflow-hidden text-white rounded-t-lg',
        },
        footer: {
          base: 'flex justify-end',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-medium">{{ currentOrg }} Domains</h3>
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            placeholder="Filter domains..."
            color="gray"
            variant="outline"
          />
        </div>
      </template>
      <DomainsTable />
      <template #footer>
        <UPagination :max="5" :page-count="5" :total="100" :model-value="1" />
      </template>
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
