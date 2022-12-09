<template>
  <VHeader />
  <div class="container">
    <ListCards />
  </div>
</template>


<script>
import VHeader from  "@/components/VHeader.vue"
import ListCards from "@/components/Page/Main/ListCards.vue";
export default {
  name: 'App',
  components: { VHeader, ListCards }
}

</script>
