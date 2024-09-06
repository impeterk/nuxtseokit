<script setup lang="ts">
useHead({
  title: "Welcome",
});
</script>

<template>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 h-full bg-gradient-to-br from-gray-50 to-gray-200 relative"
  >
    <NuxtImg
      src="/hero.webp"
      placeholder
      class="h-full w-full object-cover object-center max-lg:absolute top-0 left-0"
      format="webp"
      quality="80"
    />
    <span class="absolute left-1 bottom-1 text-xs text-gray-400"
      >Image has been AI generated, because we are developers...</span
    >
    <section
      class="place-self-center flex flex-col gap-12 w-full max-w-md z-10"
    >
      <div class="prose dark:prose-invert text-pretty text-center">
        <h1>SEO kit</h1>
        <h2>Your last tool for peak SEO Performence</h2>
      </div>
      <UCard class="shadow-lg">
        <template #header>
          <h2 class="text-2xl font-semibold">Let's get started</h2>
        </template>
        <form class="space-y-4">
          <UFormGroup label="Email">
            <UInput
              placeholder="you@example.com"
              size="xl"
              icon="i-heroicons-envelope"
            />
          </UFormGroup>

          <UFormGroup label="Password">
            <UInput
              placeholder="password"
              size="xl"
              type="password"
              icon="i-heroicons-key"
            />
          </UFormGroup>
          <UButton block size="xl">Log in</UButton>
          <UDivider label="or" />
          <UButton block size="xl" variant="outline">Get Started</UButton>
          <NuxtLink to="/dashboard">Continue to dashboard</NuxtLink>
        </form>
      </UCard>
    </section>
  </section>
</template>
