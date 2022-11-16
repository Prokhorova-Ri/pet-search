<script setup>
</script>

<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
.btn{
  text-decoration: none;
  background: linear-gradient(to left, #f5ebdc, #f7e0bd,#f7f4f1);
  padding: 10px 10px;
  margin: 5px;
  border: 0.5px solid #423d33;
  border-radius: 10px;
  background-size: 200%;
  transition: .5s;
  cursor: pointer;
  &:hover {
    background-position: right;
  }
}
</style>