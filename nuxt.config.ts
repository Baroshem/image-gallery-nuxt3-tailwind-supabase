import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ['@nuxtjs/supabase', {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY
    }]
  ]
})
