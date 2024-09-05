<script setup lang="ts">
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "lastScan",
    label: "Last Scan",
  },
  {
    key: "status",
    label: "status",
  },

  {
    key: "actions",
  },
  {
    key: "continue",
  },
];

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
</script>

<template>
  <UTable :rows="domains" :columns="columns">
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-ellipsis-horizontal-20-solid"
        />
      </UDropdown>
    </template>
    <template #continue-data="{ row }">
      <UButton :to="`/dashboard/${String(row.id)}`" label="inspect" />
    </template>
  </UTable>
</template>

<style scoped></style>
