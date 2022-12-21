import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "font-awesome/css/font-awesome.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" || "fa4" || "fa" || "fas",
  },
  theme: { dark: false },
});
