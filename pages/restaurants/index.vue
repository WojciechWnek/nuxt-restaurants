<template>
  <div>
    <h2>Available Restaurants</h2>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="restaurant in restaurants">
        <RestaurantCard :restaurant="restaurant" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const {data: restaurants} = await useFetch('/api/restaurants')
</script>

<style scoped>
  h2{
    margin-bottom: 1rem;
  }

</style>