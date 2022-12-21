/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
/**directives */
import "./plugins/directives";
import sweetAlert from "sweetalert2";

// import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollReveal from "vue-scroll-reveal";
Vue.use(
  VueScrollReveal,
  {
    class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 2500,
    scale: 1,
    origin: "top",
    distance: "40px",
    delay: 400,
    mobile: false,
  },
  sweetAlert
);
import "@/assets/main.css"
/** */
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ once: true });
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
