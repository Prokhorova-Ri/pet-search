<template>
  <div class="container">
    {{store}}
    <SearchWrapper />
  </div>
</template>

<script>
import SearchWrapper from '@/components/SearchWrapper/index.vue'
import { useCounterStore } from '../store/counter'
export default {
  name: "dev_ilya",
  components: {
    SearchWrapper
  },
  setup () {
    const store = useCounterStore()
    return { store }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/utilities/mixins";
@import "./src/assets/scss/utilities/variables";

</style>
