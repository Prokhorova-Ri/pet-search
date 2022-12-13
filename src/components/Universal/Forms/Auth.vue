<template>
  <div class="form-auth">
    <div>
      <h2 class="form-auth__title">Авторизация</h2>
      <form @submit.prevent="sendValueFormAuth" class="form-auth__layout">
        <input v-model="authForm.email" class="inputs-main" type="text" placeholder="Email" />
        <input v-model="authForm.password" class="inputs-main" type="password" placeholder="Пароль" />
        <Button type="enter_tab" select="submit" />
      </form>
    </div>
    <div class="form-auth__registration">
      <h4 class="form-auth__reg">{{ isAuthForm ? "ЕСТЬ АККАУНТ?" : "НЕТ АККАУНТА?" }}</h4>
      <Button :type="isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive } from "vue";
import Button from "../../../components/Universal/Button.vue";
export default {
  name: "Auth",
  components: {
    Button,
  },
  emits: ["getButtonCode"],
  setup(props, context) {
    const typeForm = ref();
    const authForm = reactive({
      email: "",
      password: "",
    });

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    const sendValueFormAuth = () => {
      console.log("sendValueFormAuth", authForm)
      clearValueAuth()
    }

    const clearValueAuth = () => {
      for (const key in authForm) { authForm[key] = "" }
    }

    return {
      isAuthForm: computed(() => {
        return typeForm.value === "reg";
      }),
      typeForm,
      authForm,
      changeForm,
      sendValueFormAuth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.form-auth {
  @include flexContainer(column, space-between, center);
  background: $fff;
  text-align: center;
  padding: 60px 10px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 7px 7px 10px $grey;
  &__title {
    margin-bottom: 30px;
    @include fontFamily($font-family-manrope-600, 24px);
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
    gap: 10px;
    width: 80%;
    padding: 33px 0 0 0;
  }
  &__reg {
    @include fontFamily($font-family-manrope-600, 14px);
  }
}
</style>
