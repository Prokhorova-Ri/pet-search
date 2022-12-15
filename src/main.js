import { createApp } from "vue";
import { createPinia } from 'pinia'
import { vfmPlugin } from 'vue-final-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import style from '@/assets/main.scss'
import App from "./App.vue";
import router from "./router";

const pinia = createPinia()

createApp(App).use(vfmPlugin).use(router).use(style).use(pinia).use(VueAxios, axios).mount("#app")


