<template>
  <div class="container">
    <div class="card-map">
      <Map
          border-radius="20px"
          :coordinates="[59.892315, 30.470127]"
          :zoom="120"
          id="dev"
      />
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map/index.vue'
export default {
  name: "dev_ilya",
  components: {
    Map
  }
}
</script>

<style scoped>
.card-map {
  width: 480px;
  height: 600px;
}
</style>
