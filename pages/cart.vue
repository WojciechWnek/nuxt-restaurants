<template>
  <div>
    <h2>Cart</h2>


    {{ cart }}
  </div>
</template>

<script setup>
  const cart = useCart()
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>