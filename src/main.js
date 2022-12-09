import { createApp } from "vue";
import { vfmPlugin } from 'vue-final-modal'
import App from "./App.vue";
import router from "./router";

createApp(App).use(vfmPlugin).use(router).mount("#app")
