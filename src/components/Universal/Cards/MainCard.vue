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
  background: $fff;
  min-height: 200px;
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
  &-slider {
    margin: 0 0 30px 0;
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
  &-map {
    width: 100%;
    height: 300px;
    margin: 20px 0 0 0;
  }
}
</style>
