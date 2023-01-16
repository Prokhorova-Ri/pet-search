<template>
  <div class="container">
    <SearchWrapper />
  </div>
</template>

<script>
import SearchWrapper from '@/components/SearchWrapper/index.vue'
export default {
  name: "dev_ilya",
  components: {
    SearchWrapper
  },
  setup () {
    const privateEnvVar = import.meta.env.VITE_APP_ENV_HOST_SITE;
    console.warn('process.env.VUE_APP_SITE_HOST', privateEnvVar)
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

</style>
