<script setup lang="ts">
useHead({
  title: "Welcome",
});
</script>

<template>
  <section
    class="grid grid-cols-2 h-full bg-gradient-to-br from-gray-50 to-gray-200"
  >
    <NuxtImg
      src="/hero.webp"
      placeholder
      class="h-full w-full object-cover object-center"
    />
    <section class="place-self-center flex flex-col gap-12 w-full max-w-md">
      <div class="prose dark:prose-invert text-pretty">
        <h1>SEO kit</h1>
        <h2>Your last tool to peak SEO</h2>
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
