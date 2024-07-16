<script setup lang="ts">
const items = [
  [
    {
      label: "user@email.com",
      class: "pointer-events-none text-primary justify-center",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-heroicons-user",
    },
  ],
  [
    {
      label: "logout",
      icon: "i-heroicons-arrow-right-start-on-rectangle-solid",
      click: () => {
        console.log("Edit");
      },
    },
  ],
];
</script>

<template>
  <div>
    <UDropdown :items="items">
      <UButton color="white" size="lg" variant="link">
        <UAvatar src="" icon="i-heroicons-user" />
        User@email.com
      </UButton>
    </UDropdown>
  </div>
</template>

<style scoped></style>
