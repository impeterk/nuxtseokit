<script setup lang="ts"></script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800 w-full pt-2">
    <UContainer
      class="flex items-center justify-between"
      :ui="{ constrained: '' }"
    >
      <NuxtLink
        to="#"
        class="text-3xl font-semibold tracking-wider font-mono shrink-0"
      >
        <UButton
          color="white"
          variant="ghost"
          class="text-3xl font-semibold tracking-wider font-mono"
          ><span class="text-primary">SEO</span> Kit</UButton
        >
      </NuxtLink>
      <div class="flex items-center gap-1">
        <UserNotifications class="mr-2" />
        <UserDropdown />
        <span>/</span>
        <OrgDropdown />
      </div>
    </UContainer>
  </header>
</template>

<style scoped></style>
