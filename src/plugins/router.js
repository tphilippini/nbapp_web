import { createRouter, createWebHistory } from 'vue-router';

import defaultLayout from '@/layouts/defaultLayout.vue';
import mainLayout from '@/layouts/mainLayout.vue';

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      layout: defaultLayout,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
    meta: {
      layout: defaultLayout,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LoginPage.vue'),
    meta: {
      layout: mainLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
