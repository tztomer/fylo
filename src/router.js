import { createRouter, createWebHashHistory } from 'vue-router';

import app from './App.vue';

const routes = [
  {
    path: '/',
    name: 'app',
    component: app,
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
});
