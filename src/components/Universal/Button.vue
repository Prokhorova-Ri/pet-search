<template>
  <button :class="button.className">{{ button.name }}</button>
</template>

<script>
import { ref } from "vue";
import { getButton } from "../../utilites/dicts/buttons";
export default {
  name: "Buttons",
  props: {
    type: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup (props) {
    const button = ref();
    button.value = getButton(props?.type);
    return { button }
  }
}
</script>

<style scoped>

</style>
