<template>
  <div class="form-reg">
    <h2 class="form-reg__title">Регистрация</h2>
    <form class="form-reg__layout">
      <input class="form-reg__input" type="text" placeholder="Email" />
      <input class="form-reg__input" type="text" placeholder="Пароль" />
       <input class="form-reg__input" type="text" placeholder="Пароль" />
      <Button :type="isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </form>
    <div class="form-auth__registration">
      <h5 class="form-auth__reg">{{!isAuthForm ? "Авторизация ++" : "Зарегистрировать аккаунт" }}</h5>
      <Button :type="!isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Button from "../../../components/Universal/Button.vue";
export default {
  name: "Reg",
  components: { Button },
  emits: ["getButtonCode"],
  setup(props, context) {
    const typeForm = ref();

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    return {
      isAuthForm: computed(() => {
        return typeForm.value === "reg_tab" ? true : false;
      }),
      changeForm,
    };
  },
};
</script>

<style lang="scss" scoped>

@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";
.form-reg {
  background: #fcf8ed;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  border: 2px solid $grey;
  border-radius: 20px;
  &__title {
    margin-bottom: 30px;
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
}</style>
