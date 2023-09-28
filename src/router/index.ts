import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product",
      component: () => import("@/views/ProductsPage.vue"),
    },
  ],
});

export default router;
