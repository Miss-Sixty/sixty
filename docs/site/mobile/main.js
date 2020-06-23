import Vue from "vue";
import App from "./App";
import router from "./router";
import Sixty from "../../../src";
// import "../../../src/index.scss";
import DemoBlock from "./components/DemoBlock.vue";
import DemoSection from "./components/DemoSection.vue";
import "../../../src/style/reset.scss";
import "../../../src/style/normalize.scss";

Vue.component(DemoBlock.name, DemoBlock);
Vue.component(DemoSection.name, DemoSection);
Vue.use(Sixty);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
