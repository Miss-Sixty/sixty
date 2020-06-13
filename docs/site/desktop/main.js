import Vue from "vue";
import App from "./App";
import router from "./router";
import "../common/style/base.scss";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
