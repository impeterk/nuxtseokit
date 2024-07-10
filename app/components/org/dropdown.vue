<script setup lang="ts">
const state = reactive({ currentOrg: "Org1" });

const items = [
  [
    {
      label: "Org1",
      click: () => {
        state.currentOrg = "Org1";
      },
    },
    {
      label: "Another Org",
      click: () => {
        state.currentOrg = "Another Org";
      },
    },
  ],
];
</script>

<template>
  <div>
    <UDropdown :items>
      <UButton color="white" variant="link" lize="lg">{{
        state.currentOrg
        }}</UButton>
    </UDropdown>
  </div>
</template>

<style scoped></style>
