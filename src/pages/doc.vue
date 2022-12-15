<template>
  <div class="container">
    JSON Документация: <br><br>
    <pre>{{doc}}</pre>
  </div>
</template>

<script>
import { useDocumentation } from "../store/doc";
import {computed, ref} from 'vue'
export default {
  name: "doc",
  setup () {
    const store = useDocumentation()
    store?.getDocumentation()
    return { doc: computed(() => store?.getPageDoc )}
  }
}
</script>

<style scoped>

</style>
