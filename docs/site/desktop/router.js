import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, importAll, nav } from "../common/index.js";

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
    console.log(page);
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
  // console.log(routes);
  return routes;
}

const router = new VueRouter({
  routes: getRoutes(),
});

export default router;
