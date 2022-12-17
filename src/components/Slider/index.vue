<template>
  <div class="slider-layout">
    <swiper
      :grabCursor="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="changeSlide"
      class="mySwiper"
    >
      <swiper-slide v-for="(index) in 3" :key="index">
        <div
            class="swiper-image"
            style="background-image: url('https://www.fashiontime.ru/upload/articles-v3/5f1a9660c98dbw719.jpg')"
        />
      </swiper-slide>
    </swiper>
    <div class="slider-navigation">
      <div>
        <Button
            v-if="!buttons.isBeginning"
            name="prev"
            @clickOnButton="prevSlide" />
      </div>
      <div>
        <Button
            v-if="!buttons.isEnd"
            name="next"
            @clickOnButton="nextSlide" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";
import Button from "../../components/Universal/Button.vue";
import { ref, reactive } from 'vue'
export default {
  name: "index",
  props: {
    items: {
      type: [Array, Object],
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Button
  },
  setup() {
    const swiper = ref()
    const buttons = reactive({
      isBeginning: false,
      isEnd: false
    })

    const onSwiper = ($swiper) => {
      swiper.value = $swiper;
      setActiveBtnSlide()
    }

    const nextSlide = () => {
      swiper.value.slideNext();
    }

    const prevSlide = () => {
      swiper.value.slidePrev();
    }

    const changeSlide = () => {
      setActiveBtnSlide()
    }

    const setActiveBtnSlide = () => {
      buttons.isEnd = swiper.value.isEnd;
      buttons.isBeginning = swiper.value.isBeginning;
    }

    return {
      modules: [EffectCreative],
      onSwiper,
      nextSlide,
      prevSlide,
      changeSlide,
      buttons,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.slider {
  &-layout {
    position: relative;
  }
  &-navigation {
    @include flexContainer(row, center, center);
    gap: 5px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 99;
    & > div {
      width: 30px;
      height: 30px;
    }
  }
}

  .swiper {
    width: 100%;
    height: 250px;
  }

  .swiper-slide {
    @include flexContainer(row, cneter, center);
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-image {
    height: 250px;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-top-left-radius: $border-radius-125rem;
    border-top-right-radius: $border-radius-125rem;

  }
</style>
