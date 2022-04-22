import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'netlify-builder'
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase"
  ]
})
