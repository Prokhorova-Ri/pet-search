<template>
  <div class="form-auth">
    <form class="form-auth-layout">
      <input class="form-auth-input" type="text" placeholder="Email">
      <input class="form-auth-input" type="text" placeholder="Пароль">
      <button class="form-auth-enter">Войти</button>
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

.form-auth {
  padding: 10px;
  &-layout {}
  &-input {}
  &-enter {
    @include button(20px 20px, red, 1px solid #red, 8px);
    width: 100%;
    color: white;
    font-weight: 600;
  }
}

</style>
