<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <img class="header-img" src="/src/assets/image/logo.png" alt="logo" />
        <div class="header-right">
          <input class="header-input" type="text" placeholder="Номер объявления"/>
<!--          <router-link class="header-request">ВСЕ ОБЬЯВЛЕНИЯ</router-link>-->
<!--          <router-link class="header-request2">ПОДАТЬ ОБЬЯВЛЕНИЕ</router-link>-->
          <a class="header-request">ВСЕ ОБЬЯВЛЕНИЯ</a>
          <a class="header-request2">ПОДАТЬ ОБЬЯВЛЕНИЕ</a>
          <button
              @click="changeModalAutherizaytion"
              class="header-registration">ВХОД</button>
        </div>
      </div>
    </div>
    <!--    TODO ПЕРЕНЕСТИ ГЛОБАЛЬНО ПОСЛЕ ПОДКЛЮЧЕНИЯ PINIA-->
    <WrapperModal
        :active="activeModal"
        @closeModal="changeModalAutherizaytion">
        <template #form>
          <AuthForm />
        </template>
    </WrapperModal>
  </header>
</template>

<script>
import WrapperModal from "@/components/Universal/WrapperModal.vue";
import AuthForm from "@/components/Universal/Forms/Auth.vue";
import { ref } from 'vue'
export default {
  name: "VHeader",
  components: { WrapperModal, AuthForm },
  setup () {

    const activeModal = ref(false)
    const changeModalAutherizaytion = (status) => {
      status ? activeModal.value = true : activeModal.value = status
    }

    return { activeModal, changeModalAutherizaytion }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utilities/mixins';
.header {
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  height: 80px;
  padding: 20px 0;
  //margin: 0 20px;
  margin: 0 0 40px 0;
  border-bottom: 1px solid #000000;
  &-request, &-request2, &-registration {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &-wrapper {
    @include flexContainer(row, space-between, center)
  }
  &-input {
    margin-right: 40px;
    padding: 10px;
    border-radius: 25px;
  }
  &-right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: end;
    align-items: center;
  }
  &-img {
    max-width: 40px;
    margin-right: 20px;
  }
}
</style>
