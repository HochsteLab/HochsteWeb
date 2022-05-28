import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;
