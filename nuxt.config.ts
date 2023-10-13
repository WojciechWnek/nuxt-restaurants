// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  axios: {
    baseURL: 'http://localhost:3000',
  },
  app: {
    head: {
      title: 'Dobre jedzenie',
      meta: [
        {name: 'description', content: 'Zamów jedzenie'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },

})
