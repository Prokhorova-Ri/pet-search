<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-wrapper">
          <router-link to="/">
            <img class="header-img" src="/src/assets/image/logo.png" alt="logo" />
          </router-link>
          <h4>Личный кабинет</h4>
          <div class="header-right">
            <div class="header-user-menu">
              <img src="../../assets/image/universal/none-avatar-user.png" alt="Аватрка пустая">
            </div>
          </div>
        </div>
      </div>
      <!--    TODO ПЕРЕНЕСТИ ГЛОБАЛЬНО ПОСЛЕ ПОДКЛЮЧЕНИЯ PINIA-->
    </header>
    <section class="content">
      <slot />
    </section>
  </div>
</template>

<script>
import WrapperModal from "@/components/Universal/WrapperModal.vue";
import { computed, ref } from "vue";
import { getButton } from "../../utilites/dicts/buttons.js";
export default {
  name: "VHeader",
  components: { WrapperModal },
  setup() {
    const buttonCode = ref();
    const activeModal = ref(false);
    const changeModalAutherizaytion = (status) => {
      status ? (activeModal.value = true) : (activeModal.value = status);
    };
    const button = ref();
    button.value = getButton("auth");

    const changeTypeForm = (code) => {
      console.log('changeTypeForm', code);
      buttonCode.value = code;
    }

    return {
      isAuthForm: computed(() => {
        return buttonCode.value === "reg_tab";
      }),
      activeModal,
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
  //margin: 0 0 40px 0;
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

.content {
  min-height: calc(100vh - 120px);
}

</style>
