<script setup>
import VHeader from  "@/components/VHeader.vue"
</script>

<template>
<VHeader />
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
