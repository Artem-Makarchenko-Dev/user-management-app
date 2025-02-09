import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import axios from 'axios';
import type { User } from "@/types/general";

export const useUsersStore = defineStore('users', () => {
  const users: Ref<Array<User>> = ref([]);
  const loading: Ref<Boolean> = ref(false);

  const fetchUsers = async (query: string = ''): Promise<Array<User>> => {
    loading.value = true;
    try {
      const { data } = await axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users', {
        params: { q: query }
      });
      users.value = data;
      return data
    } finally {
      loading.value = false;
    }
  };

  const fetchUser = async (id: string = ''): Promise<User> => {
    loading.value = true;
    try {
      const { data } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
      return data;
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    fetchUsers,
    fetchUser
  };
});