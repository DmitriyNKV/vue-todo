import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/viewsPage/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: () => import("./components/viewsPage/Todos.vue"),
    },
  ],
});
