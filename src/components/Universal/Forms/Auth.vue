<template>
  <div class="form-auth">
    <h2 class="form-auth__title">Авторизация</h2>
    <form class="form-auth__layout">
      <input class="form-auth__input" type="text" placeholder="Email" />
      <input class="form-auth__input" type="text" placeholder="Пароль" />
      <button :class="button.className">{{ button.name }}</button>
    </form>
    <form class="form-auth__regist">
      <h5>Зарегистрировать аккаунт</h5>
      <button :class="button.className">{{ button.name }}</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { getButton } from "@/utilites/dicts/buttons.js"
export default {
  name: "Auth",
  setup () {
    const button = ref();
    button.value = getButton('enter', 'reg');
    return {
      button
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/utilities/mixins';
@import './src/assets/scss/utilities/variables';

.form-auth {
  background: #fcf8ed;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  border: 2px solid $grey;
  border-radius: 20px;
  &__title {
    margin-bottom: 20px;
  }
  &__input {
  margin-top: 20px;
  width: 60%;
  border: 1px solid $grey;
  border-radius: 10px;
  padding: 15px;
  color: #b6b6b6;
  font-size: 14px;
  }
  &__regist{
    margin-top: 20px;
  }
}

</style>
