<template>
  <div class="card flex justify-between">
    <div class="flex items-center w-56">
      <img :src="`${dish.image}`" class="thumb" />
    </div>
    <div class="flex flex-col grow">
      <p class="font-bold text-gray-500 m-4 truncate">{{ dish.name }}</p>
      <p class="text-gray-500 m-4">{{ dish.description }}</p>
      <p class="font-bold text-gray-500 m-4 text-right">{{ dish.price }}</p>
    </div>
  </div>
</template>

<script setup>
  const { dish } = defineProps(['dish'])
</script>

<style scoped>
  .thumb {
    max-height: 150px;
    margin: 0 auto;
    border-radius: .25rem;
  }
</style>