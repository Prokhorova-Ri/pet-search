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
      class="mySwiper"
    >
      <swiper-slide>
        <div
            class="swiper-image"
            style="background-image: url('https://cs8.pikabu.ru/post_img/big/2016/03/06/9/1457279582133433203.jpg')"
        />
      </swiper-slide>
    </swiper>
    <div class="slider-navigation">
      <button  class="slider-navigation-prev">
        <img src="/src/assets/image/button/icons/arrow-left.svg" alt="Назад">
      </button>
      <button class="slider-navigation-next">
        <img src="/src/assets/image/button/icons/arrow-left.svg" alt="Вперед">
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";

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
  },
  setup() {
    return {
      modules: [EffectCreative],
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
    &-prev, &-next {
      width: 30px;
      height: 30px;
      @include button(0, $fff, 1px solid $black, $border-radius-50);
      @include flexContainer(row, center, center);
      & > img {
        width: 13px;
        height: 13px;
      }
    }
    &-next {
      & > img {
        transform: rotate(180deg);
      }
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
