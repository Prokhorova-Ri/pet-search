<template>
  <input :type="type" :placeholder="placeholder" :class="classStyle" class="inputs-main" />
</template>

<script>
export default {
  name: "InputText",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    classStyle: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Укажите поле'
    }
  }
}
</script>

<style scoped>

</style>