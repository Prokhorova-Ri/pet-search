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
        <img
          class="swiper-image"
          src="https://sun9-34.userapi.com/impg/1Ewmg_Cqkuy17uRwIAEe2s-3NvUcT6yEXvCaKg/2ZGdAF-rpRA.jpg?size=1200x1600&quality=95&sign=c19f77bd6ccdac0635ca00f178c064f4&type=album"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-image"
          src="https://sun9-74.userapi.com/impg/DudLP-BnM5EHJqbdT4BVWLKgsyiR8VNfn3oLbg/6H9SYgPBWFM.jpg?size=1440x1920&quality=95&sign=9405545b2c1e7e5f50fd8fdab701b3a0&type=album"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-image"
          src="https://sun9-7.userapi.com/impg/xlmoR4867Nq4umGWvZSoCEwrtwje08-i-pvZeg/dq3CsOH9WRk.jpg?size=1200x1600&quality=95&sign=6f89c0b3860889c4e52b909ce3ca501f&type=album"
          alt=""
        />
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
  //height: 250px;
  width: 100%;
  object-fit: contain;
}
</style>
