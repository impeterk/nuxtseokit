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
    icon: "i-material-symbols-lab-profile-outline",
  },
  {
    label: "Meta",
    icon: "i-solar-global-linear",
  },
  {
    label: "Social",
    icon: "i-fluent-people-community-48-regular",
  },
  {
    label: "Schema",
    icon: "i-mdi-code-json",
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
                padding: 'px-4',
                marker: { background: 'bg-primary-200' },
              },
              container: 'bg-gray-50 p-4 rounded-lg rounded-tl-none',
              wrapper: 'space-y-0',
            }"
          >
            <template #item="{ item }">
              <div v-if="item.label === 'Body'" class="space-y-3">
                <div class="body-grid">
                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      divide: 'divide-y-0',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4 class="text-xl font-semibold border-b">Headings</h4>
                    </template>
                    <ul class="space-y-3">
                      <li>h1</li>
                      <li>h2</li>
                      <li>h3</li>
                      <li>h4</li>
                      <li>h5</li>
                      <li>h6</li>
                    </ul>
                  </UCard>

                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      background: 'bg-red-100',
                      divide: 'divide-y-0',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4
                        class="text-xl font-semibold border-b border-b-gray-300"
                      >
                        Evaluation
                      </h4>
                    </template>
                    <ul class="space-y-3">
                      <li>O.K.</li>
                      <li>missing</li>
                      <li>too short</li>
                      <li>duplicate</li>
                    </ul>
                  </UCard>

                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      divide: 'divide-y-0',
                      background: 'bg-sky-100',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4
                        class="text-xl font-semibold border-b border-b-gray-300"
                      >
                        AI Magic
                      </h4>
                    </template>
                    <ul class="space-y-3">
                      <li>O.K.</li>
                      <li>Ad this cool heading</li>
                      <li>Let's make it a bit longer</li>
                      <li>This is not duplicate</li>
                    </ul>
                  </UCard>
                </div>
                <UDivider size="xs" class="py-3" />
                <div class="body-grid">
                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      divide: 'divide-y-0',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4 class="text-xl font-semibold border-b">Images</h4>
                    </template>
                    <ul class="space-y-3">
                      <li>
                        <UPopover
                          mode="hover"
                          :popper="{ placement: 'top-start' }"
                        >
                          <UButton
                            color="white"
                            icon="i-heroicons-photo"
                            square
                            padded
                            variant="ghost"
                          />
                          <template #panel>
                            <NuxtImg
                              src="https://picsum.photos/300/200.webp?random=1"
                              alt="some placeholder"
                              class="h-24 w-52"
                            />
                          </template>
                        </UPopover>
                      </li>
                      <li>
                        <UPopover
                          mode="hover"
                          :popper="{ placement: 'top-start' }"
                        >
                          <UButton
                            color="white"
                            icon="i-heroicons-photo"
                            square
                            padded
                            variant="ghost"
                          />
                          <template #panel>
                            <NuxtImg
                              src="https://picsum.photos/300/200.webp?random=2"
                              alt="some placeholder"
                              class="h-24 w-52"
                            />
                          </template>
                        </UPopover>
                      </li>
                      <li>
                        <UPopover
                          mode="hover"
                          :popper="{ placement: 'top-start' }"
                        >
                          <UButton
                            color="white"
                            icon="i-heroicons-photo"
                            square
                            padded
                            variant="ghost"
                          />
                          <template #panel>
                            <NuxtImg
                              src="https://picsum.photos/300/200.webp?random=3"
                              alt="some placeholder"
                              class="h-24 w-52"
                            />
                          </template>
                        </UPopover>
                      </li>
                      <li>
                        <UPopover
                          mode="hover"
                          :popper="{ placement: 'top-start' }"
                        >
                          <UButton
                            color="white"
                            icon="i-heroicons-photo"
                            square
                            padded
                            variant="ghost"
                          />
                          <template #panel>
                            <NuxtImg
                              src="https://picsum.photos/300/200.webp?random=4"
                              alt="some placeholder"
                              class="h-24 w-52"
                            />
                          </template>
                        </UPopover>
                      </li>
                    </ul>
                  </UCard>

                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      background: 'bg-red-100',
                      divide: 'divide-y-0',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4
                        class="text-xl font-semibold border-b border-b-gray-300"
                      >
                        Evaluation
                      </h4>
                    </template>
                    <ul class="space-y-3">
                      <li>O.K.</li>
                      <li>missing</li>
                      <li>too short</li>
                      <li>duplicate</li>
                    </ul>
                  </UCard>

                  <UCard
                    :ui="{
                      header: {
                        padding: 'py-3',
                      },
                      divide: 'divide-y-0',
                      background: 'bg-sky-100',
                      body: {
                        padding: 'py-0 sm:pt-0',
                      },
                    }"
                  >
                    <template #header>
                      <h4
                        class="text-xl font-semibold border-b border-b-gray-300"
                      >
                        AI Magic
                      </h4>
                    </template>
                    <ul class="space-y-3">
                      <li>O.K.</li>
                      <li>Ad this cool heading</li>
                      <li>Let's make it a bit longer</li>
                      <li>This is not duplicate</li>
                    </ul>
                  </UCard>
                </div>
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

<style scoped>
.body-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 1.5rem;
}
</style>
