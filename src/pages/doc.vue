<template>
  <div class="container">
    JSON Документация: <br><br>
    <pre>{{ document }}</pre>
  </div>
</template>

<script>
import { computed } from 'vue'
import useDoc from "../../src/api/useDoc.js";
export default {
  name: "doc",
  setup () {

    const { getDocumentation, result } = useDoc()
    getDocumentation('doc', 'get')

    return {
      document: computed(() => result)
    }
  }
}
</script>

<style scoped>

</style>
