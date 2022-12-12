<template>
  <div class="form-reg">
    <h2 class="form-reg__title">Зарегистрироваться</h2>
    <form class="form-reg__layout">
      <input class="inputs-main" type="text" placeholder="Email" />
      <div style="margin: 0 0 15px 0">
        <InputSelected :items="city" width="80%"/>
      </div>
      <input class="inputs-main" type="text" placeholder="Пароль" />
      <input class="inputs-main" type="text" placeholder="Повторите пароль" />
      <Button type="register_tab" select="submit" />
    </form>
    <div class="form-reg__registration">
      <h5 class="form-reg__reg">{{!isAuthForm ? "ЕСТЬ АККАУНТ?" : "Зарегистрировать аккаунт" }}</h5>
      <Button :type="!isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import InputSelected from "../../../components/Universal/Input/Selected.vue";
import Button from "../../../components/Universal/Button.vue";
import { useConfigSite } from "../../../store/config";
export default {
  name: "Reg",
  components: { Button, InputSelected },
  emits: ["getButtonCode"],
  setup(props, context) {
    const typeForm = ref();
    const store = useConfigSite()

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    return {
      city: computed(() => store?.getConfigSite?.city),
      isAuthForm: computed(() => {
        return typeForm.value === "reg";
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
  background: $fff;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  border-radius: 20px;
  &__title {
    @include fontFamily($font-family-manrope-600, 24px);
    margin-bottom: 20px;
  }
  &__input {
  margin-top: 20px;
  width: 80%;
  padding: 20px;
  color: #b6b6b6;
  font-size: 14px;
    border: 1px solid $border;
    border-radius: 15px;
  }
  &__registration {
    @include flexContainer(row, center, center);
    gap: 10px;
    margin: 30px 0 0 0;
  }
  &__reg {
    @include fontFamily($font-family-manrope-600, 14px);
  }
}</style>
