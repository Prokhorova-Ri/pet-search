<template>
  <div>
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
        >

        </div>
<!--        <img-->
<!--          class="swiper-image"-->
<!--          src=""-->
<!--          alt=""-->
<!--        />-->
      </swiper-slide>
    </swiper>
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
.swiper {
  width: 100%;
  height: 250px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-image {
  height: 250px;
  width: 100%;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;

}
</style>
