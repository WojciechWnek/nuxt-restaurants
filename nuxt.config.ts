// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Good Food',
      short_name: 'Good Food',
      description: 'Order food online!',
      icons: [
        {
          src: 'icons/icon.png',
          sizes: '500x500',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  axios: {
    baseURL: 'http://localhost:3000',
  },
  app: {
    head: {
      title: 'Good Food',
      meta: [{ name: 'description', content: 'Order food' }],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
});
