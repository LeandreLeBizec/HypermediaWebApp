import { createApp } from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

console.log('loading buefy...')

export default defineNuxtPlugin((nuxtApp) => {
  
    nuxtApp.vueApp.use(Buefy,
    )
    
  })
