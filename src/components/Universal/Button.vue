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
import { computed } from "vue";
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
    
    const clickButton = (code) => {
      context.emit('clickOnButton', code)
    }

    return { 
      button: computed(() => getButton(props?.type)), 
      clickButton 
    }
  }
}
</script>
