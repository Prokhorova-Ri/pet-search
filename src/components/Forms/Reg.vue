<template>
  <div class="form-reg">
    <h2 class="form-reg__title">Зарегистрироваться</h2>
    <form @submit.prevent="sendValueFormReg" class="form-reg__layout">
      <input
          v-model.trim="regForm.name"
          class="inputs-main"
          type="text"
          placeholder="Как вас зовут?"
          :class="errors.name ? 'errors-input' : ''"
      />
      <ErrorLayout :error="errors.name" />
      <input
          v-model.trim="regForm.email"
          class="inputs-main"
          type="text"
          placeholder="Email"
          :class="errors.name ? 'errors-input' : ''"
      />
      <ErrorLayout :error="errors.email" />
      <div style="margin: 0 0 15px 0">
        <InputSelected
            :items="city"
            width="100%"
            :errors="errors.city"
            @updateSelectCity="(payload) => regForm.city = payload"
        />
      </div>
      <ErrorLayout :error="errors.city" />
      <input
          v-model.trim="regForm.password"
          class="inputs-main"
          type="password"
          placeholder="Пароль"
          :class="errors.password ? 'errors-input' : ''"
      />
      <ErrorLayout :error="errors.password" />
      <Button :loader="loading" name="register_tab" type="submit" />
    </form>
    <div class="form-reg__registration">
      <h5 class="form-reg__reg">{{!isAuthForm ? "ЕСТЬ АККАУНТ?" : "Зарегистрировать аккаунт" }}</h5>
      <Button :name="!isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>

import {computed, ref, reactive, watch } from "vue";
import InputSelected from "../Universal/Input/Selected.vue";
import Button from "../Universal/Button.vue";
import { useConfigSite } from "../../store/config";
import useRegistration from "../../api/useRegistration";
import {useSetResultInfo} from "../../store/setResultInfoToast";

export default {
  name: "Reg",
  components: { Button, InputSelected },
  emits: ["getButtonCode"],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {

    const infoResult = useSetResultInfo()
    const { result, loading, errors, createNewUser } = useRegistration()

    const regForm = reactive({
      name: "",
      email: "",
      city: "",
      password: ""
    });

    const typeForm = ref();

    const store = useConfigSite()

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    const sendValueFormReg = async () => {
      await createNewUser('user', 'create', regForm)
      const { status } = result.value
      if (status === 200) {
        context.emit("getButtonCode", 'auth');
        clearAllValues()
      }
    }

    const clearAllValues = () => {
      for (const key in regForm) {
        regForm[key] = ""
      }
    }

    watch(() => props.active, (newValue) => {
      if (!newValue) {
        context.emit("getButtonCode", 'auth');
        infoResult.deleteValueErrors()
        clearAllValues()
      }
    })


    return {
      city: computed(() => store?.getConfigSite?.city),
      isAuthForm: computed(() => {
        return typeForm.value === "reg";
      }),
      loading,
      regForm,
      errors,
      changeForm,
      sendValueFormReg,
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../../assets/scss/utilities/mixins";
@import "../../assets/scss/utilities/variables";
.form-reg {
  background: $fff;
  text-align: center;
  padding: 40px 60px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  border-radius: 20px;
  &__title {
    @include fontFamily($font-family-manrope-600, 24px);
    margin-bottom: 20px;
  }
  &__input {
  margin-top: 20px;
  width: 100%;
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
