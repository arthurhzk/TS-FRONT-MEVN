import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "page",
      component: () => import("@/views/ProductsPage.vue"),
    },
    {
      path: "/:id",
      name: "detail",
      component: () => import("@/views/ProductDetailPage.vue"),
    },
    {
      path: "/shoes",
      name: "shoes",
      component: () => import("@/views/ShoesPage.vue"),
    },
    {
      path: "/socks",
      name: "socks",
      component: () => import("@/views/SocksPage.vue"),
    },
  ],
});

export default router;
