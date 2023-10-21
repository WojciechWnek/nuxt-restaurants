<template>
  <div class="order-details mb-4">
    <h3>Order Details</h3>
    <div class="customer-info">
      <p><strong>Name:</strong> {{ order.name }}</p>
      <p><strong>Address:</strong> {{ order.address }}</p>
      <p><strong>Phone:</strong> {{ order.phone }}</p>
      <p><strong>Email:</strong> {{ order.email }}</p>
    </div>
    <div class="order-items">
      <h3>Order Items</h3>
      <ul>
        <li v-for="(item, index) in order.order.items" :key="index">
          <p>
            {{ item.name }}
          </p>
          <div class="price">
            <p>{{ item.quantity }}</p>
            <span>x</span>
            <p>${{ item.price }}</p>
          </div>
        </li>
      </ul>
      <p>
        <strong>Total: ${{ order.order.total.toFixed(2) }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
const { order } = defineProps(['order']);
</script>

<style scoped>
.order-details {
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.customer-info {
  display: flex;
  justify-content: space-between;
}
.customer-info p,
.order-items h3 {
  margin: 10px 0;
}

.order-items ul {
  list-style: none;
  padding: 0;
}

.order-items li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.order-items p {
  text-align: right;
  margin-top: 10px;
}

h3 {
  font-size: 1.25rem;
  text-decoration: underline;
}
</style>
