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
export default {
  name: 'App',
  setup () {
    const route = useRoute()
    return {
      layout: computed(() => route?.meta?.layout || "main-layout")
    }
  }
}

</script>
