export default defineEventHandler(async (event) => {
  const response = await $fetch('http://localhost:3000/orders');

  return response;
});
