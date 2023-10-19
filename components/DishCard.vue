<template>
  <div class="card flex justify-between">
    <div class="flex items-center w-56">
      <img :src="`${dish.image}`" class="thumb" />
    </div>
    <div class="flex flex-col grow">
      <p class="font-bold text-gray-500 m-4 truncate">{{ dish.name }}</p>
      <p class="text-gray-500 m-4">{{ dish.description }}</p>
      <div>

        <p class="font-bold text-gray-500 m-4 text-right">{{ dish.price }}</p>
        <div class="add-to-cart m-4 flex gap-2 justify-end">

          <button @click="deleteFromCart">-</button>
          <p>
            {{ cart.filter(order => order.id === dish.id).length }}
          </p>
          <button @click="addToCart">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cart = useCart()

  const { dish } = defineProps(['dish'])

  const addToCart = () => {
    cart.value.push(dish)
  }  

  const deleteFromCart = () => {
    const index = cart.value.indexOf(dish)
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }
</script>

<style scoped>
  .thumb {
    max-height: 150px;
    margin: 0 auto;
    border-radius: .25rem;
  }

  .add-to-cart > *{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1.25rem;
    color: #6b7280
    }

  .add-to-cart p{
      background-color: rgb(198, 254, 194);
  }  
  
  .add-to-cart button{
      background-color: rgb(211, 211, 211);
  }

  .add-to-cart button:hover{
      box-shadow: 0 0 5px rgb(211, 211, 211);
  }
</style>