<template>
  <div :id="`map-container-${id}`" class="map-container" :style="`border-radius: ${borderRadius}`"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted, onBeforeUnmount, ref } from 'vue'
export default {
  name: "index",
  props: {
    borderRadius: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    coordinates: {
      type: Array,
      default: () => [59.892315, 30.470127]
    },
    zoom: {
      type: Number,
      default: 16
    }
  },
  setup (props) {
    const map = ref()

    const setParamsMap = () => {
      map.value = L.map(`map-container-${props.id}`).setView(props?.coordinates, props?.zoom);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.value);
      L.marker([59.892315, 30.470127]).addTo(map.value);
    }

    onMounted(() => {
      setParamsMap()
    })

    onBeforeUnmount(() => {
      if (map.value) {
        map.value.remove();
      }
    })

    return { map }
  }
}
</script>

<style scoped>
  .map-container {
    width: inherit;
    height: inherit;
  }
</style>
