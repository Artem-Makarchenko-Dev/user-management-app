<template>
  <v-container>
    <v-text-field
      v-model="searchQuery"
      label="Search users"
      clearable
      dense
      outlined
      @input="onSearch"
    />
    <div
      v-if="loading"
      class="d-flex justify-center align-center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
        class="my-4"
      />
    </div>
    <v-data-table
      v-if="!loading"
      :items="users"
      :headers="headers"
      @click:row="goToUser"
      item-value="id"
      hide-default-footer
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import type { User } from '@/types/general';

const userStore = useUsersStore();
const router = useRouter();

const {
  users,
  loading
} = storeToRefs(userStore);

const searchQuery = ref<string>('');

const onSearch = (): void => {
  userStore.fetchUsers(searchQuery.value);
};

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
  { title: 'Company', key: 'company.name' },
];

const goToUser = (event: MouseEvent, { item }: { item: User }): void => {
  router.push(`/user/${item.id}`);
};

userStore.fetchUsers();
</script>