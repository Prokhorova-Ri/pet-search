<template>
  <section class="search">
    <div class="search-wrapper">
      <div class="search-wrapper-where-block">
        <p class="search-wrapper-where">ГДЕ ВЫ ИЩЕТЕ</p>
        <InputSelected :items="city" />
      </div>
      <div class="search-wrapper-who-block">
        <p class="search-wrapper-who">КОГО ВЫ ИЩЕТЕ</p>
        <InputCheckBoxRadio :items="who" name="main" />
      </div>
      <div class="search-wrapper-where-block">
        <p class="search-wrapper-type">ТИП ОБЪЯВЛЕНИЯ</p>
        <InputSelected :items="type" />
      </div>
      <Button type="search" />
    </div>
  </section>
</template>

<script>
import InputSelected from "../../components/Universal/Input/Selected.vue";
import InputCheckBoxRadio from "../../components/Universal/Input/CheckBoxRadio.vue";
import Button from "../../components/Universal/Button.vue";
import { reactive } from "vue";
export default {
  name: "index",
  components: { InputSelected, InputCheckBoxRadio, Button },
  setup () {

    const city = reactive([
      { id: 0, code: 'spb', name: 'Сантк-Петербург' },
      { id: 1, code: 'msk', name: 'Москва' },
      { id: 2, code: 'kzn', name: 'Казань' }
    ])

    const who = reactive([
      { id: 0, code: 'empty', name: 'Не важно' },
      { id: 1, code: 'dog', name: 'Собака' },
      { id: 2, code: 'cat', name: 'Кошка' }
    ])

    const type = reactive([
      { id: 0, code: 'all', name: 'Все обьявления' },
      { id: 1, code: 'last', name: 'Потерян' },
      { id: 2, code: 'find', name: 'Найден' },
      { id: 3, code: 'give', name: 'Отдам' },
    ])


    return { city, type, who }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.search {
  &-wrapper {
    @include button(35px 40px, $fff, none, 1.25rem);
    @include gridContainer(repeat(auto-fit, minmax(210px, 1fr)));
    align-items: flex-end;
    gap: 20px;
    &-where {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
    &-who {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
    &-type {
      @include fontFamily($font-family-manrope-600, 14px, $black);
      margin: 0 0 8px 0;
    }
  }
}

</style>
