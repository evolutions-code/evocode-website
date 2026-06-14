import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  // Vite injects import.meta.env.BASE_URL — it includes the trailing slash
  // (e.g. "/" locally, "/evocode-website/" on GitHub Pages).
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: "smooth" }
  },
})

export default router
