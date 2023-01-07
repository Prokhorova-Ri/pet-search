<template>
  <div class="add_ads">
    <h2 class="add_ads-title">Настройка аккаунта</h2>
    <form>
      <div class="add_ads-settings">
        <div class="add_ads-image">
          <img class="add_ads-image-avatar"
              v-if="Array.isArray(imageAvatar) && imageAvatar.length > 0"
              :src="imageAvatar[0].preview"
              :alt="imageAvatar[0].name" />
          <img class="add_ads-image-avatar"
              v-else
              src="/src/assets/image/universal/none-avatar-user.png"
              alt="Нет авы"/>

          <!--    TODO отдельный компонент-->
          <div class="input__wrapper">
            <input @change="setPhotoProfile" name="file" type="file" id="input__profile" class="input input__file">
            <label for="input__profile" class="input__file-button">
              <img class="input__file-icon" src="/src/assets/image/input/icons/add.svg" alt="Выбрать файл" width="25">
            </label>
          </div>
        </div>
        <div class="add_ads-set">
          <InputText
              class-style="add_ads-input"
              placeholder="Изменить логин"
          />
          <InputText
              class-style="add_ads-input"
              placeholder="Изменить пароль"
          />
          <InputText
              class-style="add_ads-input"
              placeholder="Изменить email"
          />
        </div>
      </div>
      <button class="add_ads-rewrite-profile">Сохранить</button>
    </form>
  </div>
</template>

<script>
import InputText from "../Universal/Input/InputText.vue";
import {ref} from "vue";
import {getLoadFile} from '../../utilites/helpers.js';

export default {
  name: "AddSettings",
  components: {InputText},
  setup() {
    const imageAvatar = ref([]);

    const setPhotoProfile = (event) => {
      // console.log("setPhotoProfile", event.target.files)
      imageAvatar.value = getLoadFile(event);
    }
    return {setPhotoProfile, imageAvatar}
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.add_ads {
  padding: 20px 40px 0 40px;
  min-width: 100%;

  &-settings {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &-set {
    margin-left: 40px;
  }

  &-img {
    border: 1px solid $black;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }

  &-image {
    margin: 0 auto;
    &-avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    &-btn {
      background-color: red;
      padding: 20px 15px;
    }
  }

  &-rewrite-profile {
    @include fontFamily($font-family-manrope-600, 16px, $fff);
    width: 100%;
    background: $ginger;
    border-radius: $border-radius-10;
    transition: all 0.6s;
    min-height: 56px;
    margin: 30px 0 0 0;

    &:hover {
      background-color: $fff;
      color: $black;
      border: 1px solid $ginger;
    }
  }
}

// стили для инпута загрузки фотографии
.input__wrapper {
  width: 100%;
  position: relative;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-button {
  @include flexContainer(row, center, center);
  width: 50%;
  height: 40px;
  background: $ginger;
  color: $fff;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
}
</style>