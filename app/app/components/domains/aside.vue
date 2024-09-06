<script setup lang="ts">
const total = 1200;
const remaining = 354;
</script>

<template>
  <UCard class="w-80" as="aside">
    <template #header>
      <p class="text-lg font-semibold">
        {{ useCurrentOrg() }}
      </p>
    </template>
    <div class="space-y-6">
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
      <div class="space-y-3">
        <h4 class="text-lg font-medium">Latest Actions</h4>
        <ul class="space-y-3">
          <template v-for="i in 4" :key="i">
            <li class="rounded-lg border p-3">Scan in progess {{ i }}</li>
          </template>
        </ul>
      </div>
      <h4 class="text-lg font-medium">People</h4>
      <UAvatarGroup size="sm" :max="2">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="benjamincanac"
          class="ring-2 ring-gray-500 grayscale"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/904724?v=4"
          alt="Atinux"
          class="ring-2 ring-green-500"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/7547335?v=4"
          alt="smarroufin"
        />
      </UAvatarGroup>
    </div>
  </UCard>
</template>

<style scoped></style>
