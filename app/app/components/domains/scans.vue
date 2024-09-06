<script setup lang="ts">
const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "User name",
  },
  {
    key: "title",
    label: "Job position",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
  },
];

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];

const newScanModal = useState("newScanModal", () => false);
</script>

<template>
  <div>
    <div class="flex justify-end">
      <UButton
        label="New Scan"
        :ui="{ rounded: 'rounded-b-none' }"
        icon="i-fluent-radar-20-regular"
        size="lg"
        color="gray"
        variant="solid"
        @click="newScanModal = true"
      />

      <UModal v-model="newScanModal">
        <UCard>
          <UForm class="space-y-4" @submit.prevent="">
            <UFormGroup label="Email" name="email">
              <UInput />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
              <UInput type="password" />
            </UFormGroup>

            <UButton type="submit"> Submit </UButton>
          </UForm>
        </UCard>
      </UModal>
    </div>
    <UCard
      :ui="{
        divide: 'divide-y-0',
        header: {
          background: 'bg-gray-400 ',
          base: 'overflow-hidden text-white rounded-tl-lg',
        },
        footer: {
          base: 'flex justify-center',
        },
      }"
    >
      <template #header>
        <h3 class="text-lg font-medium">Scan Overview</h3>
      </template>
      <UTable :columns="columns" :rows="people">
        <template #role-data="{ row }">
          <UButton
            :to="`/dashboard/${$route.params.domain}/${String(row.id)}`"
            icon="i-heroicons-chevron-right-solid"
            variant="ghost"
            square
            padded
          />
        </template>
      </UTable>
      <template #footer>
        <UPagination :max="5" :page-count="5" :total="25" :model-value="1" />
      </template>
    </UCard>
  </div>
</template>

<style scoped></style>
