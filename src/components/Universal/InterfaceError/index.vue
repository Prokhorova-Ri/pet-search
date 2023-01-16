<template>
  <p
      v-if="error"
      class="errors-text">
    * {{ error }}
  </p>
</template>

<script>
export default {
  name: "index",
  props: {
    error: {
      type: String,
      default: ''
    }
  }
}
</script>