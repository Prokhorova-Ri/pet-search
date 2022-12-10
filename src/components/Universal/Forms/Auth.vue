<template>
  <div class="form-auth">
    <div>
      <h2 class="form-auth__title">Авторизация</h2>
      <form @submit.prevent="getParamsFormAuth" class="form-auth__layout">
        <input v-model="authValues.email" class="form-auth__input" type="text" placeholder="Email" />
        <input v-model="authValues.password" class="form-auth__input" type="text" placeholder="Пароль" />
        <Button type="auth" select="submit" />
      </form>
    </div>
    <div class="form-auth__registration">
      <h5 class="form-auth__reg">{{ isAuthForm ? "Авторизация" : "Зарегистрировать аккаунт" }}</h5>
      <Button :type="isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
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
        return typeForm.value === "reg_tab" ? true : false;
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
  background: #3d3d3d;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  &__title {
    margin-bottom: 30px;
  }
  &__input {
    margin: 0 0 10px 0;
    width: 60%;
    padding: 10px;
    color: #b6b6b6;
    font-size: 14px;
  }
  &__registration {
    width: 60%;
    padding: 33px 0 0 0;
  }
}
</style>
