<script setup>
import { ref } from 'vue'
import VButton from '@/components/VButton.vue';

const testModal = ref(false)

const openModal = () => {
  testModal.value = true
}

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <img class="header-img" src="/logo.png" alt="logo" />
        <div class="header-right">
          <input class="header-input" type="text" placeholder="Номер объявления"/>
          <router-link class="header-request">ВСЕ ОБЬЯВЛЕНИЯ</router-link>
          <router-link class="header-request2">ПОДАТЬ ОБЬЯВЛЕНИЕ</router-link>
          <button @click="openModal" class="header-registration">ВХОД</button>
        </div>
      </div>
    </div>
<!--    TODO ПЕРЕНЕСТИ ГЛОБАЛЬНО ПОСЛЕ ПОДКЛЮЧЕНИЯ PINIA, НАПИСАТЬ УНИВЕРСАЛЬНУЮ ОБЕРТКУ ПОД ФОРМУ-->
    <vue-final-modal v-model="testModal" name="modal-auth">
      <div class="modal">
        <form class="modal-form">
          <input type="text" placeholder="Млять ИМЯТЬ"/>
          <inpu type="text" placeholer="DICK"/>
          <button>ВСТАВЬ</button>
        </form>
      </div>
    </vue-final-modal>
<!--    <div class="header-logo">-->
<!--      <img class="header-img" src="/logo.png" alt="logo" />-->
<!--    </div>-->
<!--    <div class="header-right">-->
<!--      <input class="header-input" type="text" placeholder="Номер объявления"/>-->
<!--      <router-link class="header-request">ВСЕ ОБЬЯВЛЕНИЯ</router-link>-->
<!--      <router-link class="header-request2">ПОДАТЬ ОБЬЯВЛЕНИЕ</router-link>-->
<!--      <router-link class="header-registration">ВХОД</router-link>-->
<!--    </div>-->
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/utilities/_mixins.scss';
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
.modal-form {
  width: 350px;
  min-height: 450px;
  background-color: white;
  //  Не удалять, нужно что бы центр сделать
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //  Не удалять, нужно что бы центр сделать
}
</style>
