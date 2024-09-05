<script setup lang="ts">
const links = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-layout-dashboard",
      to: "/dashboard",
      exact: true,
    },
    {
      label: "Add Domain",
      icon: "i-lucide-file-plus-2",
      to: "/dashboard/add-domain",
    },
    {
      label: "Organization",
      icon: "i-lucide-building-2",
      to: "/dashboard/organization",
    },
    {
      label: "Settings",
      icon: "i-lucide-settings-2",
      to: "/dashboard/settings",
    },
    {
      label: "Road Map",
      icon: "i-lucide-route",
      to: "/dashboard/road-map",
    },
    {
      label: "Profile",
      icon: "i-heroicons-user",
      to: "/dashboard/profile",
    },
  ],
];
const mobileSidebar = useState("sidebarOpen");
</script>

<template>
  <UVerticalNavigation
    :links="links"
    class="px-3 nav leading"
    :ui="{
      size: 'text-base',
      active: 'font-bold  before:bg-gray-50 dark:before:bg-gray-800/50',
      padding: 'p-3',
      icon: {
        base: 'text-base size-5',
      },
    }"
    @click="mobileSidebar ? (mobileSidebar = false) : null"
  />
  <slot name="mobile-nav" />
  <UVerticalNavigation
    class="mx-3 py-3 mt-auto text-center border-t border-gray-300/50"
    :ui="{
      size: 'text-base',
      padding: 'p-3',
      icon: {
        base: 'text-base size-5',
      },
    }"
    :links="[
      {
        label: 'Sign Out',
        icon: 'i-lucide-log-out',
        iconClass: 'rotate-180',
      },
    ]"
  />
</template>

<style>
.nav ul {
  @apply space-y-2;
}
</style>
