<template>
    <div class="container">
      <section class="search">
        <SearchWrapper />
      </section>
      <ListCards />
    </div>
</template>

<script>
import ListCards from "@/components/Page/Main/ListCards.vue";
import SearchWrapper from '@/components/SearchWrapper/index.vue'
export default {
  name: "home",
  components: { ListCards, SearchWrapper }
}
</script>

<style scoped>
  .search {
    margin: 32px 0;
  }
</style>
