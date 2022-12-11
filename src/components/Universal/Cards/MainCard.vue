<template>
  <div class="main-card">
    <div class="main-card-slider">
      <Slider />
    </div>
    <div class="main-card-block">
      <div class="main-card-tags">
        <p class="main-card-tags-tag" v-for="tag in testObject" :key="tag.id">{{ tag.tag }}</p>
      </div>
      <div class="main-card-name">Пропала собака, Москва</div>
      <div class="main-card-text">
        Кобель такса кролик длинношёрстный рыжий кличка Ян с ошейником. В руки не даётся чужим. Полтора года.
      </div>
      <Button type="map"/>
      <div class="main-card-map">
        <Map
            border-radius="20px"
            :coordinates="[59.892315, 30.470127]"
            :zoom="120"
            :id="`main-${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Button from "../../../components/Universal/Button.vue";
import Slider from '@/components/Slider/index.vue'
import Map from '../../../components/Map/index.vue'
export default {
  name: "MainCard",
  components: { Button, Slider, Map },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
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
  color: $dark-gray;
  border-radius: 45px;
  //border: 2px solid $border;
  box-shadow: 9px 11px 0.5rem rgb(164 164 164 / 12%);
  min-height: 200px;
  &-block {
    text-align: center;
    padding: 10px;
  }
  &-slider {
    margin: 0 0 15px 0;
  }
  &-tags {
    @include flexContainer(row, flex-start, center);
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 0 10px 0;
    &-tag {
      padding: 5px 10px;
      background: #fcf5e3;
      border-radius: 25px;
      border: 2px solid $border;
      @include fontFamily($font-family-manrope-500, 16px);
    }
  }
  &-name {
    margin: 0 0 10px 0;
    font-size: 20px;
  }
  &-text {
    font-size: 14px;
    margin: 0 0 20px 0;
    color: $dark-gray;
  }
  &-map {
    width: 100%;
    height: 300px;
    margin: 20px 0 0 0;
  }
}
</style>
