<script setup lang="ts">
useTitle("Add Domain", {
  class: "text-center",
});
const form = reactive({
  domain: "",
  org: useCurrentOrg(),
});
</script>

<template>
  <section>
    <UCard class="w-full max-w-2xl mx-auto">
      <template #header>
        <div class="text-center">
          <p>Add new domain to your organization.</p>
          <p>Please add base domain only e.g. <em>https://example.com</em></p>
        </div>
      </template>
      <div class="space-y-4">
        <UFormGroup label="New Domain" name="domain">
          <UInput
            v-model="form.domain"
            icon="i-material-symbols-cloud-domains"
          />
        </UFormGroup>

        <UFormGroup label="Organization" name="org">
          <UInputMenu
            v-model="form.org"
            :options="user.orgs"
            icon="i-material-symbols-domain"
            disabled
          />
        </UFormGroup>

        <UButton
          label="Add Domain"
          color="primary"
          block
          icon="i-heroicons-document-plus"
        />
      </div>
    </UCard>
  </section>
</template>
