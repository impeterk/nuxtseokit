<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#6366f1" />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <MobileSidebar />
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}
html {
  scrollbar-gutter: auto !important;
}
</style>
