<template>
  <div class="card flex justify-between">
    <div class="flex items-center w-56">
      <img :src="`${dish.image}`" class="thumb" />
    </div>
    <div class="flex flex-col grow">
      <p class="font-bold text-gray-500 m-4 truncate">{{ dish.name }}</p>
      <p class="text-gray-500 m-4">{{ dish.description }}</p>
      <p class="font-bold text-gray-500 m-4 text-right">{{ dish.price }}</p>
      <button @click="addToCart">Add to cart</button>
      {{ cart.filter(id => id === dish.id).length }}
      <button @click="deletrFromCart">Delete from cart</button>
      {{cart}}
    </div>
  </div>
</template>

<script setup>
  const cart = useCart()

  const { dish } = defineProps(['dish'])

  const addToCart = () => {
    cart.value.push(dish.id)
    console.log(cart.value);
  }  
  const deletrFromCart = () => {
    console.log(cart.value);

    const index = cart.value.indexOf(dish.id)
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
    console.log(cart.value);
  }
</script>

<style scoped>
  .thumb {
    max-height: 150px;
    margin: 0 auto;
    border-radius: .25rem;
  }
</style>