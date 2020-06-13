import Vue from "vue";
import App from "./App";
import router from "./router";

new Vue({
  el: "#app",
  router,
  mounted() {
    if (this.$route.hash) {
      // wait page init
      setTimeout(() => {
        const el = document.querySelector(this.$route.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    }
  },
  render: (h) => h(App),
});
