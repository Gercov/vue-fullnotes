import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Navbar, Input, Button, Checkbox, Field } from "buefy";
import dateFilter from "@/filters/date.filter";
import store from "./store";
import "buefy/dist/buefy.css";
import "./registerServiceWorker";


Vue.config.productionTip = false;
Vue.filter('formatDate', dateFilter);
Vue.use(Navbar)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Field)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
