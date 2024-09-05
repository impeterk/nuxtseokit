<script setup lang="ts">
useTitle("URL Results");

const data = [
  {
    name: "something",
  },
  {
    name: "else",
  },
  {
    name: "another",
  },
  {
    name: "page",
  },
];

const openCard = useState("openCard", () => "something");

function handleOpenCard(card: string) {
  openCard.value == card ? (openCard.value = "") : (openCard.value = card);
}

const items = [
  {
    label: "Body",
  },
  {
    label: "Meta",
  },
  {
    label: "Social",
  },
  {
    label: "Schema",
  },
];

const accountForm = reactive({ name: "Benjamin", username: "benjamincanac" });
const passwordForm = reactive({ currentPassword: "", newPassword: "" });
</script>

<template>
  <UCard
    :ui="{
      header: {
        background: 'bg-primary ',
        base: 'overflow-hidden text-white rounded-t-lg',
      },
      divide: 'divide-y-0',
      footer: { padding: 'pt-0 pb-5' },
    }"
  >
    <template #header> Scan_date </template>
    <ul class="space-y-12">
      <UCard
        as="li"
        v-for="{ name } in data"
        :key="name"
        class="hover:bg-gray-200 active:bg-gray-200"
        :class="{ 'bg-gray-200  ring-primary-200 ring': openCard == name }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            {{ name }}
            <div class="flex items-center gap-8">
              <UButton
                label="see more"
                trailing-icon="i-heroicons-chevron-down"
                variant="solid"
                color="white"
                @click="handleOpenCard(name)"
              />
              <UButton label="inspect" />
            </div>
          </div>
        </template>
        <template #default v-if="openCard === name">
          <LazyUTabs
            :items="items"
            :ui="{
              list: {
                width: 'w-1/2',
                base: 'bg-gray-50',
                rounded: 'rounded-b-none',
                marker: { background: 'bg-primary-200' },
              },
              container: 'bg-gray-50 p-4 rounded-lg rounded-tl-none',
              wrapper: 'space-y-0',
            }"
          >
            <template #item="{ item }">
              <div v-if="item.label === 'Body'" class="space-y-3">
                <UFormGroup label="Name" name="name">
                  <UInput v-model="accountForm.name" />
                </UFormGroup>
                <UFormGroup label="Username" name="username">
                  <UInput v-model="accountForm.username" />
                </UFormGroup>
              </div>
              <div v-else-if="item.label === 'Meta'" class="space-y-3">
                <UFormGroup label="Current Password" name="current" required>
                  <UInput
                    v-model="passwordForm.currentPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
                <UFormGroup label="New Password" name="new" required>
                  <UInput
                    v-model="passwordForm.newPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
              </div>
              <div v-else-if="item.label === 'Social'" class="space-y-3">
                <UFormGroup label="Current Password" name="current" required>
                  <UInput
                    v-model="passwordForm.currentPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
                <UFormGroup label="New Password" name="new" required>
                  <UInput
                    v-model="passwordForm.newPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
              </div>
              <div v-else-if="item.label === 'Schema'" class="space-y-3">
                <UFormGroup label="Current Password" name="current" required>
                  <UInput
                    v-model="passwordForm.currentPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
                <UFormGroup label="New Password" name="new" required>
                  <UInput
                    v-model="passwordForm.newPassword"
                    type="password"
                    required
                  />
                </UFormGroup>
              </div>
            </template>
          </LazyUTabs>
        </template>
      </UCard>
    </ul>
  </UCard>
</template>

<style scoped></style>
