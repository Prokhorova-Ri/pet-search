<template>
  <div style="display: flex; justify-content: center; align-items: center; padding: 3em 0">
    <UniversalLoadingCirclePreloader v-bind="$props" />
  </div>
</template>

<script>
export default {
  name: 'CirclePreloaderPageWrapper',
  props: {
    size: {
      type: String,
      default: '3rem'
    },
    borderWidth: {
      type: String,
      default: '4px'
    },
    borderColor: {
      type: String,
      default: 'rgba(128,128,128,0.5)'
    },
    borderActiveColor: {
      type: String,
      default: 'rgba(128,128,128,1)'
    }
  }
}
</script>
