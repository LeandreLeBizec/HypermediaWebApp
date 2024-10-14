<script setup lang="ts">
let subscription = ref({
  name:'',
  email: '',
});

const hasError = ref(false)
const success = ref(false)

async function addSubscription(){
  const {data: errorFlag} = await useFetch('/api/addSubscription', { method: 'POST', query:{email: subscription.value.email, name: subscription.value.name} });
  if(errorFlag.value){
    hasError.value =  true
    success.value =  false
  }else{
    hasError.value = false
    success.value = true
  }
  if(success.value == true){
    subscription.value.name = '';
    subscription.value.email = '';
  }
}

async function refreshPage(){
  window.location.reload();
}

</script>

<template>
  <div class="bg-light-pink text-dark-pink py-3.5 px-6 shadow md:flex">
    <!--Info-->
    <div class="md:w-1/4">
      <div class="md:flex">
        <div class="w-1/3">
          <img class="w-24" src="../assets/logo.png" alt="website logo">
        </div>
        <div class="w-2/3 mt-4">
          <p><B>Women Solidarity's Center</B> </p>
          <p>Via Ampere 1, Milan</p>
        </div>
      </div>
    </div>
    <!--Contact-->
    <div class="md:w-1/4 mt-4">
      <p><B>Contact</B></p>
      <p><a href="mailto:exemple@mail.polimi.it">wcs@mail.polimi.it</a></p>
      <p><a href="tel:+39 1234567890">+39 1234567890</a></p>
      <p><a href="tel:+02 1234567890">+02 1234567890</a></p>
    </div>
    <!--newsletter form-->
    <div class="md:w-1/2 mt-4">
        <form @submit.prevent="addSubscription">
          <p><B>Join our Newsletter</B></p>
          <p>Subscribe to our Newletter to keep updated on our projects</p>
          <div class="md:flex md:mt-2">
            <b-field class="md:w-2/5">
              <b-input aria-label="name input" type="text" label="name" v-model="subscription.name" placeholder="Name" maxlength="30" class="rounded pr-4"></b-input>
            </b-field>
            <b-field  class="md:w-2/5" :type="{'is-danger':hasError, 'is-success':success}" :message="[{'Email already in use, please try again.':hasError},{'Thanks for subscribing!':success}]">
              <b-input aria-label="email input" type="email" label="email" v-model="subscription.email" placeholder="E-mail" maxlength="30" class="rounded pr-4" ></b-input>
            </b-field>
            <button @click= "refreshPage" type="submit" class="md:w-1/5 h-10 w-20 bg-dark-pink rounded text-light-pink hover:bg-light-pink hover:text-dark-pink border hover:border-dark-pink transition duration-300">Subscribe</button>
          </div>
        </form>
    </div>
  </div>
  <div class="bg-light-pink text-dark-pink py-3.5 px-6 flex justify-between items-center w-full border border-t-dark-pink">
    <div>
      <span class="">
        <!--WebSite Logo-->
      </span>
      <a href="#" class="text-sm text-dark-pink" aria-label="button link to homepage" >© - Women's Solidarity Center</a>
    </div>
    <ul class="flex space-x-2">
      <li>
        <a href="https://www.facebook.com" target="_blank" class="text-xl text-dark-pink hover:text-white" alt="link to facebook page of the center. opens in a new tab" aria-label="link to facebook" ><IconsFacebook/></a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" class="text-xl text-dark-pink hover:text-white" alt="link to instagram page of the center. opens in a new tab" aria-label="link to instagram" ><IconsInstagram/></a>
      </li>
      <li>
        <a href="https://x.com" target="_blank" class="text-xl text-dark-pink hover:text-white" alt="link to X page of the center. opens in a new tab" aria-label="link to X" ><IconsTwitter/></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  color:#684551 ;
}
</style>