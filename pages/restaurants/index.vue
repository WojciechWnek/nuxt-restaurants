<template>
  <div>
    <h2>Available Restaurants</h2>
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-3">
      <div v-for="restaurant in restaurants">
        <RestaurantCard :restaurant="restaurant" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: restaurants } = await useFetch('/api/restaurants');
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
  margin-bottom: 20px;
  font-size: 36px;
}
</style>
