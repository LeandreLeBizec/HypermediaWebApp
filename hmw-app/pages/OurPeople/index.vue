<script setup lang="ts">
import PersonCard from '~/components/PersonCard.vue';


useSeoMeta({
  title: 'Our People - Women\'s Solidarity Center',
  description: 'This page contains all the people of the organization.',
  keywords:'Women\'s Solidarity Center, people, person, team, head, collaborators'
})

const {data} = await useFetch('/api/allWorkers', {method: 'GET'})
//contains all people in the database. to get attribute values access fields with same name as db attributes. e.g. people.name
const people = data.value
function head(){
  if(people) {
    return people.filter(person => person.role.includes('Director'));
  }
}
function collaborators(){
  if(people){
    return people.filter(person => !person.role.includes('Director'));
  }
}
</script>

<template>
  <Head>
    <Title>Our People </Title>
  </Head>

  <main>
  <Breadcrumb/>
  <h1 class="text-center py-4 text-4xl font-semibold">Our People</h1>
  <p class="text-center">Our multidisciplinary team at the Women's Solidarity Center, including psychologists, lawyers, and directors, collaborates to provide effective and comprehensive support for women in crisis, ensuring their safety and well-being.</p>

  <h2 class="text-2xl font-semibold my-6">Head</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <div v-for="person in head()">
      <!-- Card component for person -->
      <PersonCard :name="person.name" :surname="person.surname" :role="person.role" :id="person.id" :img_path="person.img_path"></PersonCard>
    </div>
  </div>

  <h2 class="text-2xl font-semibold my-6">Collaborators</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <div v-for="person in collaborators()">
      <!-- Card component for person -->
      <PersonCard :name="person.name" :surname="person.surname" :role="person.role" :id="person.id" :img_path="person.img_path"></PersonCard>
    </div>
  </div>
</main>

</template>