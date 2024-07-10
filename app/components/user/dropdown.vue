<script setup lang="ts">
const items = [
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
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
        User@email.com
      </UButton>
    </UDropdown>
  </div>
</template>

<style scoped></style>
