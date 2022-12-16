<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import VHeader from  "@/components/VHeader.vue"
import { computed } from "vue";
import { useRoute } from 'vue-router';
export default {
  name: 'App',
  components: { VHeader },
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route?.meta?.layout || "main-layout")
    }
  }
}

</script>
