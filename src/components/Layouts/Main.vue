<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-wrapper">
          <img class="header-img" src="/src/assets/image/logo.png" alt="logo" />
          <h4>ПОИСК ПРОПАВШИХ ЖИВОТНЫХ</h4>
          <div class="header-right">
            <button @click="changeModalAutherizaytion" :class="button.className" class="header-registration">
              {{ button.name }}
            </button>
            <router-link to="/profile">
              Личный кабинет
            </router-link>
          </div>
        </div>
      </div>
      <!--    TODO ПЕРЕНЕСТИ ГЛОБАЛЬНО ПОСЛЕ ПОДКЛЮЧЕНИЯ PINIA-->
    </header>
    <section class="content">
      <slot />
    </section>
    <WrapperModal :active="activeModal" @closeModal="changeModalAutherizaytion">
      <template #form>
        <AuthForm v-if="!isAuthForm" :active="activeModal" @getButtonCode="changeTypeForm" />
        <RegForm v-else :active="activeModal"  @getButtonCode="changeTypeForm" />
      </template>
    </WrapperModal>
  </div>
</template>

<script>

import WrapperModal from "@/components/Universal/WrapperModal.vue";
import AuthForm from "@/components/Forms/Auth.vue";
import RegForm from "@/components/Forms/Reg.vue";
import { computed, ref } from "vue";
import { getButton } from "../../utilites/dicts/buttons.js";
import { useSetResultInfo } from "../../store/setResultInfoToast";

export default {
  name: "VHeader",
  components: { WrapperModal, AuthForm, RegForm },
  setup() {
    const buttonCode = ref();
    const button = ref();
    const activeModal = ref(false);
    button.value = getButton("auth");
    const resultInfo = useSetResultInfo()
    const { getResultInfo } = resultInfo

    const changeModalAutherizaytion = (status) => {
      status ? (activeModal.value = true) : (activeModal.value = status);
    };

    const changeTypeForm = (code) => {
      buttonCode.value = code;
    }


    return {
      isAuthForm: computed(() => {
        return buttonCode.value === "reg_tab";
      }),
      activeModal,
      getResultInfo,
      changeModalAutherizaytion,
      button,
      changeTypeForm
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utilities/mixins";
@import "../../assets/scss/utilities/variables";

.header {
  @include fontFamily($font-family-manrope-400, 16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 20px 0;
  margin: 0 0 40px 0;
  border-bottom: 1px solid #000000;
  &-request,
  &-request2,
  &-registration {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &-wrapper {
    @include flexContainer(row, space-between, center);
  }
  &-input {
    margin-right: 40px;
    padding: 10px;
    border: 1px solid $grey;
    border-radius: 25px;
  }
  &-registration {
    width: 100%;
  }
  &-img {
    max-width: 40px;
    margin-right: 20px;
  }
  &-user {
    &-menu {
      & > img {
        width: 36px;
        height: 36px;
        cursor: pointer;
      }
    }
  }
}

</style>
