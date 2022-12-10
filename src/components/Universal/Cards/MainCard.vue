<template>
  <div class="main-card">
    <div class="main-card-slider">
      <Slider />
    </div>
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
  background: $dark-gray;
  color: $fff;
  min-height: 200px;
  padding: 5px;
  &-slider {
    margin: 0 0 15px 0;
  }
  &-tags {
    @include flexContainer(row, flex-start, center);
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 0 10px 0;
    &-tag {
      padding: 6px 10px;
      background: #d1d1d1;
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
    color: #e2e2e2;
  }
  &-map {
    width: 100%;
    height: 300px;
    margin: 20px 0 0 0;
  }
}
</style>
