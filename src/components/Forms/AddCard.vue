<template>
<div class="add_ads">
  <h2 class="add_ads-title">Создать карточку</h2>
  <form>
    <InputText
        class-style="add_ads-input"
        placeholder="Название объявления"
    />
    <InputText
        class-style="add_ads-input"
        placeholder="Описание объявления"
    />
    <div class="add_ads-geo-wrapper">
      <InputText
          placeholder="Местонахождение"
      />
      <button class="add_ads-geo-add">Поделиться геолокацией</button>
    </div>

    <p class="add_ads-subtitle">ЗАГРУЗИТЕ ФОТОГРАФИИ</p>
    <!--    TODO отдельный компонент-->
    <div class="input__wrapper">
      <input @change="getLoadFile({ ev: $event, id: 'preview-card' })" name="file" type="file" id="input__file" class="input input__file" multiple>
      <label for="input__file" class="input__file-button">
        <span class="input__file-icon-wrapper">
          <img class="input__file-icon" src="/src/assets/image/input/icons/add.svg" alt="Выбрать файл" width="25"></span>
        <span class="input__file-button-text">Выберите файл</span>
      </label>
    </div>
<!--   ОТТОБРАЖАЕМ КАРТИНКУ С INPUT -->
    <div class="preview-image-wrapper" id="preview-card" />

    <p class="add_ads-subtitle">КОГО ВЫ ИЩЕТЕ</p>
    <InputCheckBoxRadio :items="who" name="main" />

    <p class="add_ads-subtitle">ТИП ОБЪЯВЛЕНИЯ</p>
    <InputSelected :items="type" id="type" />
    <!--    TODO отдельный компонент-->
    <Button name="add_card" />
  </form>
</div>
</template>

<script>
import InputText from "../Universal/Input/InputText.vue";
import InputCheckBoxRadio from "../Universal/Input/CheckBoxRadio.vue";
import InputSelected from "../Universal/Input/Selected.vue";
import { useConfigSite } from "../../store/config";
import { computed } from "vue";
import Button from "../Universal/Button.vue";
import { getLoadFile } from '../../utilites/helpers.js'
export default {
  name: "AddCard",
  components: {
    Button,
    InputText, InputCheckBoxRadio, InputSelected,
  },
  setup () {
    const store = useConfigSite()

    return {
      city: computed(() => store?.getConfigSite?.city),
      type: computed(() => store?.getConfigSite?.type_ads),
      who: computed(() => store?.getConfigSite?.who_search),
      getLoadFile
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.add_ads {
  padding: 0 40px;
  min-width: 100%;
  &-title {
    padding-bottom: 20px;
   }
  &-input {
    @include fontFamily($font-family-manrope-600, 14px, $g-9D9B95);
  }
  &-subtitle {
    @include fontFamily($font-family-manrope-600, 16px, $black);
    margin: 15px 0;
  }
  &-geo {
    &-wrapper {
      @include flexContainer(row, space-between, center);
      gap: 20px;
    }
    &-add {
      display: flex;
    }
  }
}

.preview-card-image {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
}
.preview-image-wrapper {
  @include flexContainer(row, flex-start, cneter);
  gap: 20px;
}

// стили для инпута загрузки фотографии

.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-icon-wrapper {
  @include flexContainer(row, center, center);
  height: 60px;
  width: 60px;
  margin-right: 15px;
  border-right: 1px solid #fff;
}

.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
  @include fontFamily($font-family-manrope-600, 16px, $fff);
}

.input__file-button {
  @include flexContainer(row, flex-start, center);
  width: 100%;
  //max-width: 290px;
  height: 60px;
  background:  $ginger;
  color: $fff;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
}

</style>