import { createApp } from "vue";
import { vfmPlugin } from 'vue-final-modal'
import style from '@/assets/main.scss'
import App from "./App.vue";
import router from "./router";

createApp(App).use(vfmPlugin).use(router).use(style).mount("#app")


