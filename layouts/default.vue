<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Good Food</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/restaurants">Restaurants</NuxtLink></li>
          <li><NuxtLink to="/cart">Cart</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  nav,ul{
    display: flex;
    align-items: center;
  }

  
  .router-link-exact-active {
    color: #12b488;
  }

</style>