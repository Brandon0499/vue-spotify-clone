import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
  ],
});

export default router;
