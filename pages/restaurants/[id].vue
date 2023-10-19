<template>
  <div>
    <h2>{{ restaurant.name }}</h2>
    <div class="grid grid-cols-1 gap-5">
      <div v-for="dish in restaurant.dishes">
        <DishCard :dish="dish" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { id } = useRoute().params

  const { data: restaurant } = await useFetch('/api/restaurants/' + id, {key: id})

  definePageMeta({
    layout: "default",
  })
</script>

<style scoped>
  h2{
    margin-bottom: 1rem;
    margin-bottom: 20px;
    font-size: 36px;
  }
</style>