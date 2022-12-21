<template>
  <button
    :type="select"
    :class="button.className"
    @click="clickButton(button.code)"
    >
    <template v-if="loader">
      <CirclePreloader size="16px" border-width="2px" border-color="#1B1918" border-active-color="white" />
    </template>
    <template v-else>
      <template v-if="button.name">
        {{ button.name }}
      </template>
      <template v-else>
        <img src="/src/assets/image/button/icons/arrow-left.svg" alt="Назад">
      </template>
    </template>
  </button>
</template>

<script>
import { computed } from "vue";
import { getButton } from "../../utilites/dicts/buttons";
import CirclePreloader from "../../components/Universal/Loading/CirclePreloader.vue";
export default {
  name: "Buttons",
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    select: {
      type: String,
      default: 'button'
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  components: { CirclePreloader },
  emits: ['clickOnButton'],
  setup (props, context) {

    const clickButton = (code) => {
      context.emit('clickOnButton', code)
    }

    return {
      button: computed(() => getButton(props?.name)),
      clickButton
    }
  }
}
</script>
