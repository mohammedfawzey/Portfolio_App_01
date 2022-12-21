import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Pages/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/*",
    name: "notfound",
    component: () => import(/**not found page */ "@/views/NotFoundPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
