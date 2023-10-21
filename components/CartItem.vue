<template>
  <div class="card summary-card w-full sm:w-2/4">
    <p>
      {{ order.name }}
    </p>
    <div class="price">
      <p>{{ order.quantity }}</p>
      <span>x</span>
      <p>${{ order.price }}</p>
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(['order']);
</script>

<style scoped>
.summary-card {
  max-height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.price {
  display: flex;
  gap: 0.5rem;
}
</style>
