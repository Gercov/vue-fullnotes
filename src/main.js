import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import dateFilter from "@/filters/date.filter";
import "buefy/dist/buefy.css";
import "./registerServiceWorker";
import store from "./store";

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
