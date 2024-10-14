// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', 'nuxt-mdi'],
  supabase:{
    redirect: false
  },
  plugins: [
    '~/plugins/openai.js', '~/plugins/buefy.js',
  ],
})


