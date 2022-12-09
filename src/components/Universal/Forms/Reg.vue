<template>
  <div class="form-reg">
    <h2 class="form-reg__title">Регистрация</h2>
    <form class="form-reg__layout">
      <input class="form-reg__input" type="text" placeholder="Email" />
      <input class="form-reg__input" type="text" placeholder="Пароль" />
      <button :class="button.className">{{ button.name }}</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { getButton } from "@/utilites/dicts/buttons.js";
export default {
  name: "Reg",
  setup() {
    const button = ref();
    button.value = getButton("reg");
    return { button };
  },
};
</script>

<style lang="scss" scoped>
.form-reg {
  background: #fcf8ed;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  box-shadow: 7px 7px 10px $grey;
  border: 2px solid $grey;
  border-radius: 20px;
  &__title {
    margin-bottom: 30px;
  }
  &__input {
  margin-top: 20px;
  width: 60%;
  border: 1px solid $grey;
  border-radius: 10px;
  padding: 15px;
  color: #b6b6b6;
  font-size: 14px;
  }
}</style>
