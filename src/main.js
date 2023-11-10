import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import filters from "./utils/filters";
import "@/assets/scss/style.scss";
import "./registerServiceWorker";
import VueGtag from "vue-gtag";

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
app.config.globalProperties.$filters = filters;
app.use(VueGtag, {
  config: { id: "G-MCHN8K2WXR" },
});
