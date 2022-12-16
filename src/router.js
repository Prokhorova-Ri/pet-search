import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import dev_ilya from "./pages/dev_ilya.vue";
import doc from "./pages/doc.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/",
        name: "Home",
        meta: { layout: 'main-layout' },
        component: Home,
      },
      {
        path: "/profile",
        name: "Profile",
        meta: { layout: 'profile-layout' },
        component: Profile,
      },
      //Временная страница для разработки компонентов
      {
          path: "/dev_ilya",
          name: "dev_ilya",
          component: dev_ilya,
      },
      {
          path: "/doc",
          name: "doc",
          component: doc,
      }
  ],
});

export default router;
