<script setup lang="ts">
const currentOrg = useCurrentOrg();

currentOrg.value = "Org1";

const items = [
  [
    {
      label: "Org1",
      click: () => {
        currentOrg.value = "Org1";
      },
    },
    {
      label: "Another Org",
      click: () => {
        currentOrg.value = "Another Org";
      },
    },
  ],
];
</script>

<template>
  <div>
    <UDropdown :items>
      <UButton color="white" variant="link" lize="lg">{{ currentOrg }}</UButton>
    </UDropdown>
  </div>
</template>

<style scoped></style>
