<template>
  <section class="main-cards">
    <div class="main-cards-wrapper">
      <MainCard v-for="(index) in 20" :key="index" :index="index" />
    </div>
    <button class="main-cards-more">Загрузить еще</button>
  </section>
</template>

<script>
import MainCard from "@/components/Universal/Cards/MainCard.vue";
export default {
  name: "ListCards",
  components: { MainCard }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/utilities/mixins';

.main-cards {
  &-wrapper {
    @include gridContainer(repeat(auto-fit, minmax(400px, 1fr)));
    gap: 20px;
  }
  &-more {
    margin: 60px 0;
    @include button(22px 0, #F08080, none, 10px);
    width: 100%;
    cursor: pointer;
  }
}
</style>
