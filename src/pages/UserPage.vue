<template>
  <v-container>
    <div
      v-if="loading"
      class="d-flex justify-center align-center mb-4"
    >
      <v-progress-circular
        indeterminate
        color="primary"
        class="my-4"
      />
    </div>
    <v-card
      v-if="user && !loading"
      class="mb-4"
    >
      <v-card-title>{{ user.name }}</v-card-title>
      <v-card-text>
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Website: {{ user.website }}</p>
        <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
        <p>Company: {{ user.company.name }} - {{ user.company.catchPhrase }}</p>
      </v-card-text>
    </v-card>

    <v-btn @click="goBack">Back</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUsersStore } from "@/stores/users";
import type { User } from '@/types/general';
import {storeToRefs} from "pinia";

const userStore = useUsersStore();
const route = useRoute();
const router = useRouter();
const user = ref<User | null>(null);

const { loading } = storeToRefs(userStore)

const goBack = () => router.push('/');

onMounted(async () => {
  user.value = await userStore.fetchUser(route.params.id)
})
</script>