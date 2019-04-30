/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";
import meng from "@/components/meng";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    { path: "/about", component: About },
    { path: "/meng", component: meng }
  ]
});
