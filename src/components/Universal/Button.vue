<template>
  <button 
    :type="select"
    :class="button.className"
    @click="clickButton(button.code)"
    >
    {{ button.name }}
  </button>
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
    },
    select: {
      type: String,
      default: 'button'
    }
  },
  emits: ['clickOnButton'],
  setup (props, context) {
    const button = ref();
    button.value = getButton(props?.type);

    const clickButton = (code) => {
      context.emit('clickOnButton', code)
    }

    return { button, clickButton }
  }
}
</script>

<style scoped>

</style>
