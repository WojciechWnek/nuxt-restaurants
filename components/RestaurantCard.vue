<template>
  <div class="card text-center">
    <img :src="`${restaurant.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ restaurant.name }}</p>
    <NuxtLink :to="`/restaurants/${restaurant.id}`">
      <p class="btn my-4">View Dishes</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { restaurant } = defineProps(['restaurant'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>