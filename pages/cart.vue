<template>
  <div>
    <h2>Cart</h2>
    <div v-for="order in groupedOrders">
      <CartItem :order="order"/>
    </div>
    <p v-if="groupedOrders.length === 0" class="text-center">Your cart is empty. Please add items first.</p>
   <p v-if="groupedOrders.length > 0" class="total" >
     Total: ${{ total.toFixed(2) }}
   </p>
   <hr>
    <div v-if="groupedOrders.length > 0">

      <DeliveryForm />
    </div>
  </div>
</template>

<script setup>
  const cart = useCart()

  const groupedOrders = cart.value.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          acc.push({ name: item.name, quantity: 1, price: item.price });
      }

      return acc;
  }, []);

  const total = groupedOrders.reduce((accumulator, item) => {
  return accumulator + item.quantity * item.price;
}, 0);

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
  hr{
    margin: 2rem 0;
  }

  .total{
    font-weight: bold;
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
    text-align: end;
    padding: .75rem;
  }
</style>