<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useUserAgents } from "./store/userAgents";
export default {
  name: 'App',
  setup () {
    const route = useRoute()
    const mobile = useUserAgents()
    mobile.changeDevice()
    return {
      layout: computed(() => route?.meta?.layout || "main-layout")
    }
  }
}

</script>
