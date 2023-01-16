<template>
  <vue-final-modal
      v-model="status"
      :name="name"
      @click-outside="clickOutsideModal"
  >
    <div class="modal-form">
      <slot name="form" />
    </div>
  </vue-final-modal>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: "WrapperModal",
  props: {
    name: {
      type: String,
      default: 'modal-auth'
    },
    maxHeight: {
      type: String,
      default: '450px'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeModal'],
  setup (props, context) {
    const status = ref(props?.active)
    const clickOutsideModal = () => {
      context.emit('closeModal', false)
    }

    const styleModal = {
      'maxHeight': props?.maxHeight
    }

    watch(() => props?.active, (newStatus) => {
      status.value = newStatus
    })
    return { status, styleModal, clickOutsideModal }
  }
}
</script>

<style lang="scss" scoped>
.modal-form {
  width: 450px;
  max-height: 90vh;
  background-color: white;
  border-radius: 45px;
  //  Не удалять, нужно что бы центр сделать
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010!important;
  //  Не удалять, нужно что бы центр сделать
}
</style>
