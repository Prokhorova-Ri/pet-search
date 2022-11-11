<script setup>
import VButton from '@/components/VButton.vue';
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img class="header-logo__img" src="/logo.png" alt="logo" />
    </div>
    <div class="header-title">
      <h3>Поиск животных</h3>
    </div>
    <div class="header-auth">
      <VButton>Регистрация</VButton>
      <VButton>Вход</VButton>
    </div>

  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid #000000;
  &-logo {
    &__img {
      max-width: 40px;
      margin-right: 20px;
    }
  }
}
</style>