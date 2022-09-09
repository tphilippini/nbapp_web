import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '', name: 'home', component: () => import('@/pages/HomePage.vue') },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
