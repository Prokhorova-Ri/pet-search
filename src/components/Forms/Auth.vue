<template>
  <div class="form-auth">
    <div>
      <h2 class="form-auth__title">Авторизация</h2>
      <form @submit.prevent="sendValueFormAuth" class="form-auth__layout">
        <input
            v-model="authForm.email"
            class="inputs-main"
            type="text"
            placeholder="Email"
        />
        <input
            v-model="authForm.password"
            class="inputs-main"
            type="password"
            placeholder="Пароль"
        />
        <Button name="enter_tab" select="submit" />
      </form>
    </div>
    <div class="form-auth__registration">
      <h4 class="form-auth__reg">{{ isAuthForm ? "ЕСТЬ АККАУНТ?" : "НЕТ АККАУНТА?" }}</h4>
      <Button :name="isAuthForm ? 'auth_tab' : 'reg_tab'" @clickOnButton="changeForm" />
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch } from "vue";
import Button from "../Universal/Button.vue";
import { useSetResultInfo } from "../../store/setResultInfoToast";
import useRegistration from "../../api/useRegistration";
export default {
  name: "Auth",
  components: {
    Button,
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["getButtonCode"],
  setup(props, context) {
    const infoResult = useSetResultInfo()
    const typeForm = ref();

    const authForm = reactive({
      email: "",
      password: "",
    });

    const { result, loading, errors, authUser } = useRegistration()

    const changeForm = (code) => {
      typeForm.value = code;
      context.emit("getButtonCode", code);
    };

    const sendValueFormAuth = () => {
      authUser('user', 'auth', authForm)
      // clearValueAuth()
    }

    const clearValueAuth = () => {
      for (const key in authForm) { authForm[key] = "" }
    }

    watch(() => props.active, (newValue) => {
      if (!newValue) {
        infoResult.deleteValueErrors()
        clearValueAuth()
      }
    })


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
@import "../../assets/scss/utilities/mixins";
@import "../../assets/scss/utilities/variables";

.form-auth {
  @include flexContainer(column, space-between, center);
  background: $fff;
  text-align: center;
  padding: 40px 60px;
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
