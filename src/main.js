import { createApp } from "vue";
import style from "./assets/main.scss";
import { vfmPlugin } from 'vue-final-modal'
import App from "./App.vue";

createApp(App).use(vfmPlugin).mount("#app")
