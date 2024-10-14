<script setup lang="ts">
import ActivityCard from '~/components/ActivityCard.vue';


useSeoMeta({
  title: 'Our Services - Women\'s Solidarity Center',
  description: 'This page contains the list of services of the center.',
  keywords:'Women\'s Solidarity Center, all services, service, legal office, psychological support, shelter house, support for professional training, medical support, Self-help/mutual aid groups'
})


const { data: serviceData} = await useFetch('/api/allServices');
const services = serviceData.value;

const search = ref('');

const filteredServices = computed(() => {
  return services?.filter(service => {
    return service.name.toLowerCase().includes(search.value.toLowerCase());
 });
});

</script>

<template>
  <Head>
    <Title> Our Services </Title>
  </Head>

  <main>
  <Breadcrumb />
  <h1 class="text-center py-4 text-4xl font-semibold">Our Services</h1>
  <div class="container py-4">
    <img src="\assets\banner\services-info.jpg" alt="services banner" class="rounded w-full">
  </div>

  <input
      v-model="search"
      type="text"
      placeholder="Search services..."
      class="px-4 py-2 my-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-dark-pink focus:border-dark-pink"
  >

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
    <div v-if="services"
        v-for="service in filteredServices"
        :key="service.id"
        class="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
        style="color:black">

      <!-- Card component for activites -->
       
        <ActivityCard :name="service.name" :description="service.description" :to="'/AllActivities/OurServices/'+service.id"></ActivityCard>

    </div>
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
</style>
