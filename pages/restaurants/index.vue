<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <!-- <ProductCard :product="p" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from "axios"

    try {
      const res = await axios.get(`http://localhost:3000/restaurants`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

  definePageMeta({
    layout: "products",
  })


</script>