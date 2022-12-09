<template>
  <div class="form-auth">
    <div>
      <h2 class="form-auth__title">Авторизация</h2>
      <form 
        @submit.prevent="getParamsFormAuth"
        class="form-auth__layout">
        <input v-model="authValues.email" class="form-auth__input" type="text" placeholder="Email" />
        <input v-model="authValues.password" class="form-auth__input" type="text" placeholder="Пароль" />
        <Button type="auth" select="submit" />
      </form>
    </div>
    <div class="form-auth__registration">
      <h5 class="form-auth__reg">Зарегистрировать аккаунт</h5>
      <Button type="reg" @clickOnButton="changeForm"/>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Button from "../../../components/Universal/Button.vue";
export default {
  name: "Auth",
  components: {
    Button,
  },
  setup() {
    
    const authValues = reactive({
      email: '',
      password: ''
    })

    const changeForm = (code) => {
      console.log('changeForm', code)
    }

    const getParamsFormAuth = () => {
      console.warn('getParamsFormAuth', authValues)
      //  TODO API 
    }

    return { changeForm, authValues, getParamsFormAuth }
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.form-auth {
  @include flexContainer(column, space-between, center);
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
    margin: 0 0 10px 0;
    width: 60%;
    border: 1px solid $grey;
    border-radius: 10px;
    padding: 10px ;
    color: #b6b6b6;
    font-size: 14px;
  }
  &__registration {
    width: 60%;
    border-top: 1px solid $grey;
    padding: 33px 0 0 0;
  }
}
</style>
