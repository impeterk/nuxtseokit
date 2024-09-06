<script setup lang="ts">
import { VisSingleContainer, VisDonut } from "@unovis/vue";
import { Scatter } from "@unovis/ts";

// donut data
const donutValue = (d: number) => d.total;
const donutData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];
</script>

<template>
  <UCard
    :ui="{
      header: {
        background: 'bg-primary ',
        base: 'overflow-hidden text-white rounded-t-lg',
      },
      divide: 'divide-y-0',
      footer: { padding: 'pt-0 pb-5' },
    }"
  >
    <template #header>
      <h3 class="text-lg font-medium">domain-name.com</h3>
    </template>
    <div class="space-y-16">
      <section class="grid grid-cols-3 gap-4 pt-8">
        <UCard
          :ui="{
            ring: 'ring-2 ring-gray-500/50 dark:ring-gray-400/50',
            shadow: 'shadow-lg',
            header: {
              padding: 'py-3',
            },
            background: 'bg-gray-50',
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <p class="font-semibold">Summary</p>
              <UIcon
                name="i-material-symbols-format-list-bulleted"
                class="size-6"
              />
            </div>
          </template>
          <div class="grid grid-cols-2">
            <div class="prose">
              <ul>
                <li>numeral rating on impediments</li>
              </ul>
            </div>
            <VisSingleContainer :data="donutData" height="150">
              <VisDonut :value="donutValue" />
            </VisSingleContainer>
          </div>
        </UCard>
        <UCard
          :ui="{
            ring: 'ring-2 ring-red-500/50 dark:ring-red-400/50',
            shadow: 'shadow-lg',
            header: {
              padding: 'py-3',
            },
            background: 'bg-red-50',
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <p class="font-semibold">High Priority</p>
              <UIcon
                name="i-fa6-solid-circle-exclamation"
                class="size-6 text-red-500"
              />
            </div>
          </template>
          <div class="prose">
            <ul>
              <li>main impediments on site</li>
            </ul>
          </div>
        </UCard>
        <UCard
          :ui="{
            ring: 'ring-2 ring-sky-500/50 dark:ring-sky-400/50',
            shadow: 'shadow-lg',
            header: {
              padding: 'py-3',
            },
            background: 'bg-sky-50',
          }"
        >
          <template #header>
            <div class="flex items-center gap-4">
              <p class="font-semibold">Suggestions</p>
              <UIcon
                name="i-fa6-solid-wand-magic-sparkles"
                class="size-6 text-sky-500"
              />
            </div>
          </template>
          <div class="prose">
            <ul>
              <li>optional field if selected under New Scan</li>
              <li>includes AI suggestions</li>
            </ul>
          </div>
        </UCard>
      </section>
      <DomainsGraph />
      <DomainsScans />
    </div>
  </UCard>
</template>

<style scoped></style>
