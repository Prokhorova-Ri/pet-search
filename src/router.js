import { createRouter, createWebHistory } from "vue-router";
import VButton from "@/components/VButton.vue";  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/button",
      name: "Button",
      component: VButton,
    },  
  ],
});

export default router;