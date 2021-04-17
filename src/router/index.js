import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/notes",
    name: "notes",
    component: () => import("@/views/Notes.vue"),
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("@/views/Todos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
