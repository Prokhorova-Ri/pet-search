<template>
  <div class="main-card">
    <div class="main-card-slider">
      TODO SWIPER SLIDER
    </div>
    <div class="main-card-tags">
      <p class="main-card-tags-tag" v-for="(tag) in testObject" :key="tag.id">{{tag.tag}}</p>
    </div>
    <div class="main-card-name">
      Пропала собака, Москва
    </div>
    <div class="main-card-text">
      Кобель такса кролик длинношёрстный рыжий кличка Ян с ошейником. В руки не даётся чужим. Полтора года.
    </div>
    <button class="main-card-btn">Показать на карте</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "MainCard",
  setup () {
    const testObject = reactive([
      { id: 0, tag: 'Кошка' },
      { id: 1, tag: 'Казань' }
    ])
    return { testObject }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utilities/mixins';
// ВРЕМЕННЫЕ СТИЛИ, ДЛЯ ПОНИМАНИЯ
.main-card {
  min-height: 200px;
  border: 1px solid;
  padding: 20px;
  &-slider {
    @include flexContainer(row, center,center);
    height: 100px;
    width: 100%;
  }
  &-tags {
    @include flexContainer(row, flex-start,center);
    flex-wrap: wrap;
    gap: 5px;
    margin: 0 0 10px 0;
    &-tag {
      border: 1px solid red;
      padding: 2px 10px;
      border-radius: 7px;
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
  &-btn {
    @include button(10px 0, green, none, 10px);
    text-align: center;
    width: 100%;
    cursor: pointer;
    color: white;
  }
}

</style>
