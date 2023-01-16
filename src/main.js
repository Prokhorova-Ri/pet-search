import { createApp } from "vue";
import { createPinia } from 'pinia'
import { vfmPlugin } from 'vue-final-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import style from '@/assets/main.scss'
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import MaintLayout from "../src/components/Layouts/Main.vue";
import Profile from "../src/components/Layouts/Profile.vue";
import Error from  "../src/components/Universal/InterfaceError/index.vue"

const pinia = createPinia()

const options = {
    position: "top-right",
    transition: "Vue-Toastification__slideBlurred",
    timeout: 3825,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 1,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: false,
    rtl: false,
};

createApp(App)
    .use(vfmPlugin)
    .use(router)
    .use(style)
    .use(pinia)
    .use(Toast, options)
    .component("main-layout", MaintLayout)
    .component("profile-layout", Profile)
    .component("ErrorLayout", Error)
    .use(VueAxios, axios)
    .mount("#app")



