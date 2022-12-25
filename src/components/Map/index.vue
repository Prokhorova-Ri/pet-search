<template>
  <div :id="`map-container-${id}`" class="map-container" :style="`border-radius: ${borderRadius}`"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {onMounted, onBeforeUnmount, ref, watch} from 'vue'
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
      type: [Array, Object],
      default: () => [55.796127, 49.106414]
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
      setTimeout(() => {
        setParamsMap()
      }, 1000)
    })

    onBeforeUnmount(() => {
      if (map.value) {
        map.value.remove();
      }
    })

    watch(() => props.coordinates, (newValue) => {
      map.value.remove();
      setParamsMap()
    })

    return { map }
  }
}
</script>

<style lang="scss" scoped>
  .map-container {
    width: 100%;
    height: 100%;
    & > * {
      width: inherit;
    }
  }
</style>
