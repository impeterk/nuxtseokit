<script setup lang="ts">
const currentOrg = useCurrentOrg();

currentOrg.value = user.orgs[0];

const items = user.orgs.map((org) => {
  return {
    label: org,
    click: () => {
      currentOrg.value = org;
    },
  };
});
</script>

<template>
  <div>
    <UDropdown :items="[items]">
      <UButton color="white" variant="link" lize="lg">{{ currentOrg }}</UButton>
    </UDropdown>
  </div>
</template>

<style scoped></style>
