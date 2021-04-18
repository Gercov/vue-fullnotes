import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "notes",
    meta: { title: "Notes", name: "note-item" },
    component: () => import("@/views/Notes.vue"),
  },
  {
    path: "/todos",
    name: "todos",
    meta: { title: "To-Do", name: "todo-item" },
    component: () => import("@/views/Todos.vue"),
  },
  {
    path: "/all",
    name: "allitems",
    meta: { title: "All Items" },
    component: () => import("@/views/AllItemsPage.vue"),
  },
  {
    path: "/info",
    name: "info",
    meta: { title: "info" },
    component: () => import("@/views/info.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
