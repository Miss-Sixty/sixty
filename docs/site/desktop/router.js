import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, importAll, nav } from "../common/index.js";
import "../common/iframe-router";

if (isMobile) {
  location.replace("mobile.html" + location.hash);
}

const docs = {};
const docsFromMarkdown = require.context("../../markdown", false, /\.md$/);
const docsFromPackages = require.context("../../../src", true, /\.md$/);

importAll(docs, docsFromMarkdown);
importAll(docs, docsFromPackages);

Vue.use(VueRouter);

function getRoutes() {
  const routes = [
    {
      path: "*",
      redirect: () => "/home",
    },
  ];

  nav.forEach((nav) => {
    if (!nav.items) return;
    nav.items.forEach((page) => addRoute(page));
  });

  function addRoute(page) {
    let { path } = page;

    if (!path) return;

    const module = docs[`./${path}/README.md`] || docs[`./${path}.md`];
    let component;

    if (module) {
      component = module.default;
    }

    if (!component) return;

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

const router = new VueRouter({
  routes: getRoutes(),
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  },
});

router.afterEach(() => {
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;
export default router;
