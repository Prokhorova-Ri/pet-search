<template>
  <div class="form-auth">
    <div>
      <h2 class="form-auth__title">Авторизация</h2>
      <form @submit.prevent="getParamsFormAuth" class="form-auth__layout">
        <input v-model="authValues.email" class="form-auth__input" type="text" placeholder="Email" />
        <input v-model="authValues.password" class="form-auth__input" type="password" placeholder="Пароль" />
        <Button type="auth_tab" select="submit" />
      </form>
    </div>
    <div class="form-auth__registration">
      <h4 class="form-auth__reg">{{ isAuthForm ? "ЕСТЬ АККАУНТ?" : "НЕТ АККАУНТА?" }}</h4>
      <Button :type="isAuthForm ? 'auth' : 'reg'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { reactive } from "@vue/reactivity";
import Button from "../../../components/Universal/Button.vue";
export default {
  name: "Auth",
  components: {
    Button,
  },
  emits: ["getButtonCode"],
  setup(props, context) {
    const typeForm = ref();

    const authValues = reactive({
      email: "",
      password: "",
    });

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    const getParamsFormAuth = () => {
      console.warn("getParamsFormAuth", authValues);
      //  TODO API
    };

    return {
      isAuthForm: computed(() => {
        return typeForm.value === "reg" ? true : false;
      }),
      changeForm,
      typeForm,
      authValues,
      getParamsFormAuth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.form-auth {
  @include flexContainer(column, space-between, center);
  @include fontFamily($font-family-manrope-400, 16px);
  background: $fff;
  text-align: center;
  padding: 60px 10px;
  height: 100%;
  border-radius: 45px;
  box-shadow: 7px 7px 10px $grey;
  &__title {
    margin-bottom: 30px;
  }
  &__input {
    border: 1px solid $border;
    border-radius: 15px;
    margin: 0 0 15px 0;
    width: 80%;
    padding: 15px;
    color: #b6b6b6;
    font-size: 16px;
  }
  &__registration {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 70%;
    padding: 33px 0 0 0;
  }
}
</style>
