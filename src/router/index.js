import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import ExpandedCategory from "../views/ExpandedCategory.vue";

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
    {
      path: "/expandedCategory/:id",
      name: "ExpandedCategory",
      component: ExpandedCategory,
    },
  ],
});

export default router;
