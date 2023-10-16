<template>
  <div>
    <h1 class="font-bold text-3xl mb-2">{{ restaurant.name }}</h1>

    <h2 class="font-medium text-xl text-green-600 mb-5">Avaliable dishes</h2>

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