export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const response = await $fetch('http://localhost:3000/restaurants/' + id);

  return response;
});
