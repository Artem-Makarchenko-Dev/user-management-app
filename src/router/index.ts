import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import UserPage from '@/pages/UserPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/user/:id', component: UserPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;