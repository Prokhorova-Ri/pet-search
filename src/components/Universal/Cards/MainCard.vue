<template>
  <div class="main-card">
    <div ref="frontCard" class="main-card-front">
      <div class="main-card-slider">
        <Slider />
      </div>
      <div class="main-card-block">
        <div class="main-card-tags">
          <p class="main-card-tags-tag" v-for="tag in testObject" :key="tag.id">#{{ tag.tag }}</p>
        </div>
        <div class="main-card-name">Пропала собака, Москва</div>
        <div class="main-card-text">
          Кобель такса кролик длинношёрстный рыжий кличка Ян с ошейником. В руки не даётся чужим. Полтора года.
        </div>
        <Button @clickOnButton="changeTypeCard" name="map" />
      </div>
    </div>
    <div ref="backCard" class="main-card-back">
      <div class="main-card-map">
        <Map
            border-radius="1.25rem"
            :coordinates="[59.892315, 30.470127]"
            :zoom="16"
            :id="`main-${index}`"
        />
        <Button @clickOnButton="changeTypeCard" name="card"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
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
    const frontCard = ref()
    const backCard = ref()

    const testObject = reactive([
      { id: 0, tag: "Кошка" },
      { id: 1, tag: "Казань" },
      { id: 2, tag: "Потерян" },
    ]);

    const changeTypeCard = (code) => {
      if (code === 'card') {
        frontCard.value.classList.remove('main-card-front-active')
        backCard.value.classList.remove('main-card-back-active')
      } else {
        frontCard.value.classList.add('main-card-front-active')
        backCard.value.classList.add('main-card-back-active')
      }
    }

    return { testObject, frontCard, backCard, changeTypeCard };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";
.main-card {
  @include fontFamily($font-family-manrope-500, 16px);
  background: $fff;
  color: $black;
  border-radius: $border-radius-125rem;
  box-shadow: 9px 11px 0.5rem rgb(164 164 164 / 12%);
  min-height: 470px;
  position: relative;
  perspective: 1000px;
  max-width: 350px;
  min-width: 95%;
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
      @include fontFamily($font-family-manrope-600, 16px, $ginger);
    }
  }
  &-name {
    @include fontFamily($font-family-manrope-600, 24px);
    margin: 0 0 10px 0;
    text-align: left;
  }
  &-text {
    @include fontFamily($font-family-manrope-600, 16px, $black);
    text-align: left;
    margin: 0 0 20px 0;
    padding: 0 0 40px 0;
  }
  &-map {
    width: 100%;
    height: 100%;
    //margin: 20px 0 0 0;
  }
  &-front {
    transition: 1s;
    backface-visibility: hidden;
    height: 100%;
  }
  &-back {
    transition: 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
}

.main-card-front-active {
  transition: 1s;
  transform: rotateY(180deg);
}
.main-card-back-active {
  transition: 1s;
  transform: rotateY(360deg);
}
</style>
