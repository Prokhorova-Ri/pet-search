<template>
  <div class="form-auth">
    <form class="form-auth__layout">
      <h2>Авторизация</h2>
      <input class="form-auth__input" type="text" placeholder="Email" />
      <input class="form-auth__input" type="text" placeholder="Пароль" />
      <button  class="form-auth__enter">ВХОД</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/utilities/mixins';
@import './src/assets/scss/utilities/variables';

.form-auth {
  background: #b6b6b6;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  &__layout {
  }
  &__input {
  margin: 10px;
  width: 60%;
  border: 15px;
  padding: 15px;
  color: #b6b6b6;
  font-size: 14px;
  cursor: pointer;
  }
  &__enter {
    @include button(20px 20px, $fff, 1px solid red, 8px);
    width: 60%;
    font-weight: 600;
    margin-top: 20px;
  }
}

</style>
