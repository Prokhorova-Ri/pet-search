<template>
  <section class="main-cards">
    <div class="main-cards-wrapper">
      <MainCard v-for="(index) in 6" :key="index" :index="index" />
    </div>
    <Button name="more" />
  </section>
</template>

<script>
import Button from "../../../components/Universal/Button.vue";
import MainCard from "@/components/Universal/Cards/MainCard.vue";
export default {
  name: "ListCards",
  components: { MainCard, Button }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/utilities/mixins';

.main-cards {
  &-wrapper {
    @include gridContainer(repeat(auto-fit, minmax(320px, 23%)));
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 45px;
  }
  &-more {
    margin: 60px 0;
    @include button(22px 0, #F08080, none, 10px);
    width: 25%;
    cursor: pointer;
  }
}
</style>
