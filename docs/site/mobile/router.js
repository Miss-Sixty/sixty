import Vue from "vue";
import VueRouter from "vue-router";
import DemoHome from "./components/DemoHome.vue";
import { nav, importAll } from "../common/index.js";
import "../common/iframe-router";

const componentMap = {};
const context = require.context("../../../src", true, /demo\/index.vue$/);
importAll(componentMap, context);

function getRoutes() {
  const routes = [
    {
      path: "*",
      redirect: () => `/home`,
    },
    {
      path: `/home`,
      component: DemoHome,
    },
  ];

  nav.forEach((nav) => {
    if (!nav.items) return;
    nav.items.forEach((page) => addRoute(page));
  });

  function addRoute(page) {
    let { path } = page;
    const module = componentMap[`./${path}/demo/index.vue`];
    let component;

    if (module) {
      component = module.default;
    }

    if (!component) {
      return;
    }
    routes.push({
      component,
      name: path,
      path: `/${path}`,
      meta: {
        name: path,
        title: page.title,
      },
    });
  }

  return routes;
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes: getRoutes(),
});

router.afterEach(() => {
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;

export default router;
