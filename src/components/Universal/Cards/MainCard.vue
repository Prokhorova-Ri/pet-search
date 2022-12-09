<template>
  <div class="main-card">
    <div class="main-card-slider">TODO SWIPER SLIDER</div>
    <div class="main-card-tags">
      <p class="main-card-tags-tag" v-for="tag in testObject" :key="tag.id">{{ tag.tag }}</p>
    </div>
    <div class="main-card-name">Пропала собака, Москва</div>
    <div class="main-card-text">
      Кобель такса кролик длинношёрстный рыжий кличка Ян с ошейником. В руки не даётся чужим. Полтора года.
    </div>
    <Button type="map"/>
  </div>
</template>

<script>
import { reactive } from "vue";
import Button from "../../../components/Universal/Button.vue";
export default {
  name: "MainCard",
  components: { Button },
  setup() {
    const testObject = reactive([
      { id: 0, tag: "Кошка" },
      { id: 1, tag: "Казань" },
    ]);
    return { testObject };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";
// ВРЕМЕННЫЕ СТИЛИ, ДЛЯ ПОНИМАНИЯ
.main-card {
  @include fontFamily($font-family-manrope-500, 16px);
  background: $fff;
  min-height: 200px;
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
  &-slider {
    @include flexContainer(row, center, center);
    height: 100px;
    width: 100%;
  }
  &-tags {
    @include flexContainer(row, flex-start, center);
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 0 10px 0;
    &-tag {
      border: 1px solid $grey;
      padding: 2px 10px;
      border-radius: 7px;
      background: #fcf8ed;
      @include fontFamily($font-family-manrope-500, 16px);
    }
  }
  &-name {
    margin: 0 0 10px 0;
    font-size: 20px;
  }
  &-text {
    font-size: 16px;
    margin: 0 0 20px 0;
    color: #423d33;
  }
}
</style>
