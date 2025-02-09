<template>
  <header>
    <v-container>
      <nav>
        <RouterLink
          to="/"
          class="text-h5 text-decoration-none text-grey-darken-3"
        >Home</RouterLink>
      </nav>
    </v-container>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
