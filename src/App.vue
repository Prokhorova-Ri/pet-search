<template>
  <div id="app">
    <VHeader />
    <router-view />
  </div>
</template>


<script>
import VHeader from  "@/components/VHeader.vue"
export default {
  name: 'App',
  components: { VHeader }
}

</script>
