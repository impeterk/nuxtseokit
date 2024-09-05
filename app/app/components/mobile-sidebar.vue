<script setup lang="ts">
const isOpen = useState("sidebarOpen");
</script>

<template>
  <USlideover v-model="isOpen" side="left">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
      }"
    >
      <template #header>
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
      </template>
      <aside class="flex flex-col h-full">
        <SideNav />
        <UserDropdown />
        <OrgDropdown />
      </aside>
    </UCard>
  </USlideover>
</template>

<style scoped></style>
