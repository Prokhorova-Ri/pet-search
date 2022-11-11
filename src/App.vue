<script setup>
import VHeader from  "@/components/VHeader.vue"
</script>

<template>
<VHeader />
<div class="test">
  <p class="test-testovich">Картина: Vue зажал Ри:((((</p>
  <img src="https://i.ytimg.com/vi/sPmAJsqnqYQ/maxresdefault.jpg" alt="Ри и Vue">
</div>
</template>

<style lang="scss" scoped>
// TEST CONNECT SCSS
@import '@/assets/scss/utilities/mixins';

.test {
  margin: 100px 0;
  // TEST WORKING MIXINS
  @include flexContainer(column, center,  center);
  &-testovich {
    margin: 0 0 10px 0;
  }
}
</style>
