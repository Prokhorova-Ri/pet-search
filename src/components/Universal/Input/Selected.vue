<template>
  <div class="input-selected-layout">
    <div ref="selected"
         class="input-selected"
         :style="`width: ${ width }`"
         :class="errors ? 'errors-input' : ''"
    >
      <input
          class="input-selected-input"
          type="text"
          :placeholder="placeholder"
          @click="clickInput"
      >
      <img class="input-selected-image" src="/src/assets/image/input/icons/arrow-down.svg" alt="Выбрать"/>
    </div>
    <div ref="modal" class="input-modal-wrapper">
      <p
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item.name)"
          :style="item.code === 'empty' ? 'display: none' : ''"
          class="input-modal-value">{{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "selected",
  props: {
    items: {
      type: Object,
      default: () => []
    },
    width: {
      type: String,
      default: '100%'
    },
    errors: {
      type: String,
      default: ''
    }
  },
  emits: ['updateSelectCity'],
  setup (props, context) {

    const selected = ref()
    const modal = ref()

    const placeholder = ref(props.items[0].name)

    const selectItem = (city) => {
      placeholder.value = city
      context.emit('updateSelectCity', city)
      clickInput()
    }

    const clickInput = () => {
      const active = selected.value.classList.contains('input-selected-active')
      active ? selected.value.classList.remove('input-selected-active') : selected.value.classList.add('input-selected-active')
      active ? modal.value.style.display = 'none' : modal.value.style.display = 'block'
    }

    return { placeholder, selected, modal, selectItem, clickInput }
  }
}
</script>

<style lang="scss">
@import "./src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

.input-selected {
  @include flexContainer(column, center, flex-start);
  @include button(0, $fff, 1px solid $g-9D9B95, $border-radius-10);
  min-height: 56px;
  position: relative;
  padding: 0 0 0 11px;
  transition: all .6s;
  width: 100%;
  margin: 0 auto;
  &:hover {
    border: 1px solid $ginger;
  }
  &-layout {
    position: relative;
  }
  &-input {
    @include fontFamily($font-family-manrope-600, 14px, $black);
    width: 95%;
    height: 56px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      @include fontFamily($font-family-manrope-600, 14px, $g-9D9B95);
    }
  }
  &-image {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.6s;
  }
}

.input-modal {
  &-wrapper {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    @include button(11px, $fff, none, $border-radius-4);
    margin: 10px 0 0 0;
    z-index: 99;
    box-shadow: 9px 11px 0.5rem rgb(164 164 164 / 12%);
  }
  &-value {
    @include fontFamily($font-family-manrope-600, 16px, $black);
    margin: 0 0 10px 0;
    cursor: pointer;
    transition: color 0.6s;
    &:hover {
      color: $ginger;
    }
    &:last-child {
      margin: 0 0 0 0;
    }
  }
}

.input-selected-active {
  border: 1px solid $ginger;
  transition: all 0.6s;
  & > .input-selected-image {
    transform: rotate(-180deg);
  }
}


</style>
