import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import filters from "./utils/filters";

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
app.config.globalProperties.$filters = filters;
