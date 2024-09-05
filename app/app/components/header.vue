<script setup lang="ts">
const sidebarOpen = useState("sidebarOpen", () => false);
</script>

<template>
  <header
    class="border-b border-gray-200 dark:border-gray-800 w-full pt-2 sticky top-0 bg-white"
  >
    <UContainer
      class="flex items-center justify-between content-center"
      :ui="{ constrained: '' }"
    >
      <NuxtLink to="/dashboard">
        <UButton
          color="white"
          variant="ghost"
          class="text-3xl font-semibold tracking-wider font-mono"
          ><span class="text-primary">SEO</span> Kit</UButton
        >
      </NuxtLink>
      <div class="items-center gap-1 hidden lg:flex">
        <UserNotifications class="mr-2" />
        <UserDropdown />
        <span>/</span>
        <OrgDropdown />
      </div>
      <div class="flex items-center lg:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          square
          variant="ghost"
          size="lg"
          @click="sidebarOpen = !sidebarOpen"
        />
      </div>
    </UContainer>
  </header>
</template>

<style scoped></style>
