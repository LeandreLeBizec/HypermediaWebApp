<script setup lang="ts">

useSeoMeta({
  title: 'All activities - Women\'s Solidarity Center',
  description: 'This page contains a short introduction to center activities.',
  keywords:'Women\'s Solidarity Center, all activities, projects, services, activities'
})

</script>

<template>
  <Head>
    <Title> All Activities </Title>
  </Head>

  <main>
  <Breadcrumb/>
  <h1 class="text-center py-4 text-4xl font-semibold">All Activities</h1>

  <div class="container py-4">
    <img src="\assets\banner\activities-intro1.jpg" alt="banner" style="border-radius: 15px;">
  </div>

  <p class="text-center pt-4 ">Welcome to the All Activities page, your comprehensive resource for our impactful projects and essential services. We are dedicated to raising awareness about crucial social issues and providing support through a variety of specialized services. Whether you need legal assistance, psychological support, or access to professional training, our diverse offerings are designed to empower and assist you. Explore our programs to find the help and information you need, and join us in making a difference.</p>

  <div class="flex justify-between mt-10 flex-wrap lg:flex-nowrap gop-4 xl:gap-6">
      <!-- Service's block -->
      <NuxtLink to="/AllActivities/OurServices" class="w-full p-10 bg-gradient-to-br from-purple-400 to-purple-100 text-center rounded-lg  cursor-pointer transition-transform transform hover:scale-105" style="color: black;">
        <h2 class="text-2xl font-bold mb-4">Services</h2>
        <p>Explore our diverse range of services designed to support and empower you.</p>
      </NuxtLink>

      <!-- Service's block -->
      <NuxtLink to="/AllActivities/OurProjects" class="w-full p-10 bg-gradient-to-br from-rose-400 to-light-pink text-center rounded-lg cursor-pointer transition-transform transform hover:scale-105" style="color: black;">
        <h2 class="text-2xl font-bold mb-4">Projects</h2>
        <p>Discover our impactful projects aimed at raising awareness and creating change.</p>
      </NuxtLink>
  </div>
</main>

</template>

<style scoped>



.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  width: 100%; /* Adatta la larghezza come necessario */
}

.banner{
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  height: 10vw;
}
</style>
