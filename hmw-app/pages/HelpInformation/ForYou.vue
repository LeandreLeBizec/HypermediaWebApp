<script setup lang="ts">
useSeoMeta({
  title: 'Help Information - For You - Women\'s Solidarity Center',
  description: 'This page contains information to help an user if they\'re the one facing a situation of violence',
  keywords:'Women\'s Solidarity Center, gender-based violence, about violence on women, help information, physical violence, sexual violence, psychological violence, financial violence'
})

</script>

<template>
  <Head>
    <Title> Help Information - For You </Title>
  </Head>

  <Breadcrumb/>
  
  <main>
  <div class="grid lg:grid-cols-2 mt-5 grid-cols-1">
    <div class="pt-10 leading-relaxed">
      <h1 class="text-6xl font-semibold mb-6">Do you seek assistance?</h1>  
      <p class="text-lg text-transform: uppercase font-semibold text-balance mb-4">our center is open to all women that are experiencing any kind of violence.</p>
      <p class="text-balance"> We know that asking for help can be difficult, especilly if what you're living is causing you feelings of shame. Our center is a welcoming place where you won't be judged.
        Our competent operators are there to help you and listen to your story.</p>
    </div>

    <div class="w-full "> <!-- decorative image -->
      <img src="../../assets/helpInfo/help_foryou.jpg" alt="">
    
    </div>

  </div>

  <div class="mt-20">
    <h2 class="text-xl font-bold mb-2"> Gender-based violence can affect women in any social context. </h2>

    <div class=" border-l-light-pink border-l-4 pl-2">

      <p> While intimate partner violence is the most common form of violence experienced by women globally, gender based violence can also 
        occurr in other different forms. Domestic violence, harrassment on the workplace, violent behaviors in online spaces or technology-facilitate violence are all forms of violence can affect any woman. 
         </p>
         <p class="mt-2">Not sure if what you are experiencing is violence?
          Men's violence against women has many forms, and it's not necessarily physical.
          In any case, remember that you can turn to us if you have any doubts.</p>

      <!-- link to help information page -->
      <div class="mt-4">
        <NuxtLink to="/HelpInformation" class="" >
            <p class="font-bold hover:text-rose-400"> Read more on how to recognize gender-based violence</p>
        </NuxtLink>
      </div>
  
  
    </div>
    
  </div>

  <div class="flex-col nter my-20 py-10 bg-gradient-to-b from-rose-400 to-light-pink rounded-lg">
    <div class="">
      <h3 class="text-2xl font-bold uppercase text-center">you can call us</h3>
    </div>
    
    <div >
      
        <p class="text-4xl font-bold uppercase text-center mt-10 ">
          <a href="tel:+02 1234567890">+02 1234567890</a>
        </p>
      
    </div>
  </div>

  <div class="flex justify-between flex-wrap lg:flex-nowrap ">
    <div class="w-fit">
      <!-- decorative image-->
      <img src="../../assets/helpInfo/hands_foryou.jpg" alt="">
    </div>

    <div class="w-full text-left md:ml-6">
      <p class="text-xl font-bold mb-2 lg:mt-0">All conversations are confidential.</p>
      <p class="">
        Violence causes deep trauma that affects all aspects of your life, your person and your relationships. It often manifests itself with
      </p>
      <ul class="list-disc ml-6">
          <li>apathy</li>
          <li>difficulty in attention and concentration</li>
          <li>emotional instability</li>
          <li>anxiety</li>
          <li>abuse of alcohol, drugs and psychopharmaceuticals</li>
          <li>fear and distrust of others</li>
          <li>difficulties in relation to sexuality</li>
        </ul>
      <p>If you recognise one or more of these symptoms in yourself, it is time to seek help. With the right support, you can get well again.
         You should not feel responsible for the violent situation you are experiencing, even though it is a very common feeling among abused women within the couple.</p>
      
      
 
    </div>
    

  </div>
<div class="mt-10">
  <NuxtLink to="/HelpInformation/ForOthers" class="hover:text-rose-400 font-bold "> Do you think that someone close to you might be experiencing gender-based violence? 
    See how you can help.</NuxtLink>
</div>
</main>
  
 

  
  
</template>

<style scoped>
a {
  color:#684551 ;
}


</style>