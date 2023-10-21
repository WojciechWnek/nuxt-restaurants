<template>
  <div>
    <h2>Order history</h2>
    <div class="flex flex-col-reverse">
      <div v-for="order in orders">
        <HistoryItem :order="order" />
      </div>
    </div>
    <p v-if="orders.length === 0" class="text-center">
      You don't have order history. Please order something first.
    </p>
  </div>
</template>

<script setup>
const id = Date.now().toString();
const { data: orders } = await useFetch('/api/orders', { key: id });
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
hr {
  margin: 2rem 0;
}
</style>
