<script setup lang="ts">
const total = 1200;
const remaining = 354;
</script>

<template>
  <UCard class="w-80" as="aside">
    <template #header>
      <UMeter
        :value="remaining"
        :max="total"
        color="primary"
        :label="`Remaining ${remaining}`"
      >
        <template #indicator>
          <div class="flex justify-between items-center">
            <p class="text-lg font-medium">Credits</p>
            <p class="text-gray-500 dark:text-gray-400 text-right text-sm">
              {{ total }}
            </p>
          </div>
        </template>
      </UMeter>
    </template>
    <p>something</p>
  </UCard>
</template>

<style scoped></style>
