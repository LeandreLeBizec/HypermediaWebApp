<script setup lang="ts">

useSeoMeta({
  title: 'About The Center - Women\'s Solidarity Center',
  description: 'This page contains information about The Center\'s history and mission',
  keywords:'Women\'s Solidarity Center, about, history, mission, about us'
})


</script>

<template>
  <Head>
    <Title> About The Center </Title>
  </Head>

  <main>
  <Breadcrumb/>
  <!-- banner -->
  <div class="flex justify-between bg-cover relative scroll-smooth overflow-y-auto flex-grow mt-5 rounded-lg">
    <div class="bg-dark-pink/50">
      <!--decorative image-->
      <img src="../assets/theCenter/women-standing-together-caring-eachother.jpg" alt="" class=" object-cover mix-blend-multiply" loading="eager">

    </div>

    <div class="absolute m-8 lg:m-20 text-balance text-left text-white">
      <h1 class=" size-full text-3xl lg:text-6xl font-semibold  ">About the Center</h1>
      <div class="text-xl font-semibold mt-2 ">
        <p>Our center is a safe place where every woman is welcome. </p>
        <p>Our goal is to give back to every suffering woman the life they deserve.</p>
      </div>
    </div>
  </div>

  <!-- about our mission, our history-->
  <div class="flex-col items-end justify-center leading-relaxed ">
    <div class="mt-10">
      <h2 class="text-3xl font-semibold mb-4 ">Our Mission</h2>
      <p class="text-xl text-justify" >Our mission is to support each woman to become economically independent, influential, rich in dignity and wisdom: a woman who knows the value of diversity and is able to interact with other women on the basis of solidarity.
       Our shelter is conceived as places of protection, empowerment and re-planning of life for women and children affected by violence. Even if supporting and protecting 
      women and their children suffering from abuse is the main focus of our Center's activity, our Center also manages different projects to raise awareness about gender based violence and to give women tools to protect themselves in situations of risk .   </p>
    </div>

    <div class="mt-10 " >
      <h2 class="text-3xl font-semibold text-right  mb-4" >Our History</h2>
      <p class="text-xl text-justify"> Women's Solidarity Center was founded in 2010 with the aim of bringing out, knowing, combating, preventing and overcoming gender-based violence.
        From the outset, the Center has been clear that discrimination, marginalisation and oppression against women is a widespread, serious, complex social phenomenon that only specific skills can effectively combat.
      Since it was founded, the Center helped more than 15 000 women escape from situations of abuse and violence, helping them regaining their freedom and autonomy. Over the course of the years the Center also received
      consensus, support and funding for its porjects, both nationally and internationally.  </p>
    </div>
  </div >

  <!-- numbers section -->
  <div class="flex-col justify-between mt-10 ">
    <h3 class="text-3xl font-semibold mb-5" >Helping women in difficulty since 2010.</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-stretch text-center rounded-lg shadow-inner lg:divide-x lg:divide-y-0 divide-y divide-slate-200 p-4 ">
      <div class="w-full my-4">
        <p class="text-3xl font-semibold">14</p>
        <p class="text-xl font-semibold mt-2">years of activity</p>
      </div>
      <div class="w-full my-4">
        <p class="text-3xl font-semibold">15,000</p>
        <p class="text-xl font-semibold mt-2">women helped</p>
      </div>
      <div class="w-full my-4">
        <p class="text-3xl font-semibold">25</p>
        <p class="text-xl font-semibold mt-2">funded projects</p>
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>
</style>