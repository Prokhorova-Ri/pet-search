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
    <div class="add_ads-geo-wrapper" :style="isMobile ? '' : 'grid-template-columns: 100%'">
      <InputText
          class-style="add_ads-input-geo"
          placeholder="Местонахождение"
      />
      <template v-if="isMobile">
        <p>или</p>
        <button
            class="add_ads-geo-add"
            type="button"
            @click="getGeoLocation"
        >
          <span>Поделиться геолокацией</span>
        </button>
      </template>
    </div>
    <div class="add_ads-map" v-if="isMobile">
      <Map
          border-radius="1.25rem"
          :coordinates="localCoordinates.length > 0 ? localCoordinates : [55.796127, 49.106414]"
          :zoom="11"
          id="add-map-card"
      />
    </div>

    <p class="add_ads-subtitle">ЗАГРУЗИТЕ ФОТОГРАФИИ</p>

    <!--   ОТТОБРАЖАЕМ КАРТИНКУ С INPUT -->
    <div class="preview-image-wrapper">
      <div
          class="preview-image-block"
          v-for="(image, index) in localImages"
          :key="index"
          :id="`image-${image.id}`"
          ref="imageBlock"
      >
        <img
            class="preview-card-image"
            :src="image.preview"
            :alt="image.name" />
        <button
            type="button"
            class="preview-card-button"
            @click.stop="deleteLocalImage(image.id)"
        >Удалить</button>
      </div>
    </div>
    <!--    TODO отдельный компонент-->
    <div class="input__wrapper">
      <input @change="setLocalImage($event)" name="file" type="file" id="input__file" class="input input__file" multiple>
      <label for="input__file" class="input__file-button">
        <span class="input__file-icon-wrapper">
          <img class="input__file-icon" src="/src/assets/image/input/icons/add.svg" alt="Выбрать файл" width="25"></span>
        <span class="input__file-button-text">Выберите файл</span>
      </label>
    </div>

    <p class="add_ads-subtitle">КОГО ВЫ ИЩЕТЕ</p>
    <InputCheckBoxRadio :items="who" name="main" />

    <p class="add_ads-subtitle">ТИП ОБЪЯВЛЕНИЯ</p>
    <InputSelected :items="type" id="type" />
    <!--    TODO отдельный компонент-->
    <Button name="add_card" select="submit" />
  </form>
</div>
</template>

<script>
import InputText from "../Universal/Input/InputText.vue";
import InputCheckBoxRadio from "../Universal/Input/CheckBoxRadio.vue";
import InputSelected from "../Universal/Input/Selected.vue";
import { useConfigSite } from "../../store/config";
import { computed, reactive, ref } from "vue";
import Button from "../Universal/Button.vue";
import { deleteLoadFile, getLoadFile, setInfoToast } from '../../utilites/helpers.js'
import Map from '../../components/Map/index.vue';
import {useUserAgents} from "../../store/userAgents";
export default {
  name: "AddCard",
  components: {
    Button, Map,
    InputText, InputCheckBoxRadio, InputSelected,
  },

  setup () {
    const store = useConfigSite()
    const mobile = useUserAgents()
    let images = ref([])
    let localCoord = ref([])
    let coords = reactive({
      lat: 0,
      lon: 0
    })
    const imageBlock = ref()

    // TODO PROXY WTF???
    const setLocalImage = (ev) => {
      console.warn('images.value.length', images.value.length)
      if (images.value.length <= 4) {
        console.warn('images.value.length <= 4', images.value.length)
        images.value = [...images.value, ...getLoadFile(ev)]
        console.warn('images.value', images.value)
      }  else {
        setInfoToast("error", "Можно загрузить не более 5 фотографий!!!!!!!!!!!!!");
      }
    }

    const deleteLocalImage = (id) => {
      images.value = deleteLoadFile({ images: images.value, id })
      console.warn('deleteLocalImage', images.value)
    }

    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          coords.lat = position?.coords?.latitude
          coords.lon = position?.coords?.longitude
          localCoord.value.push(position?.coords?.latitude, position?.coords?.longitude)
        })
      }
    }


    return {
      city: computed(() => store?.getConfigSite?.city),
      type: computed(() => store?.getConfigSite?.type_ads),
      who: computed(() => store?.getConfigSite?.who_search),
      localImages: computed(() => { return images.value }),
      localCoordinates: computed(() => { return localCoord.value }),
      imageBlock,
      coords,
      localCoord,
      setLocalImage,
      deleteLocalImage,
      getGeoLocation,
      isMobile: computed(() => mobile.getStatusMobile)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.add_ads {
  padding: 0 40px;
  min-width: 100%;
  &-title {
    margin: 20px 0;
    @include fontFamily($font-family-manrope-600, 18px, $black);
   }
  &-input {
    @include fontFamily($font-family-manrope-600, 14px, $g-9D9B95);
    &-geo {
      margin: 0!important;
    }
  }
  &-subtitle {
    @include fontFamily($font-family-manrope-600, 16px, $black);
    margin: 15px 0;
  }
  &-map {
    width: 100%;
    height: 300px;
  }
  &-geo {
    &-wrapper {
      @include gridContainer(60% 4% auto);
      align-items: center;
      gap: 20px;
      margin: 0 0 10px 0;
      & > p {
        @include fontFamily($font-family-manrope-600, 16px, $black);
        display: flex;
        justify-content: center;
      }
    }
    &-add {
      display: flex;
      align-self: stretch;
      justify-content: center;
      border-radius: 10px;
      transition: all 0.6s;
      &:hover {
        background: $ginger;
        & > span {
          color: white;
        }
      }
      & > span {
        display: flex;
        align-self: center;
        transition: all 0.6s;
        @include fontFamily($font-family-manrope-600, 16px, $black);
      }
    }
  }
}

.preview-image-block {
  @include flexContainer(column, center, center);
  border: 1px solid $ginger;
  border-radius: 10px;
  padding: 15px 0 0 0;
}

.preview-card-image {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
}
.preview-image-wrapper {
  margin: 20px 0;
  @include gridContainer(repeat(auto-fit, minmax(320px, 23%)));
  justify-content: space-between;
  gap: 20px;
}

.preview-card-button {
  @include button(10px 0px, $fff, none, none);
  @include fontFamily($font-family-manrope-600, 16px, $black);
  width: 100%;
  border-top: 1px solid $ginger;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 10px 0 0 0;
  transition: all 0.6s;
  &:hover {
    background: $ginger;
    color: $fff;
  }
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