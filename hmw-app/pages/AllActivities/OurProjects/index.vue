<script setup lang="ts">

useSeoMeta({
  title: 'Our Projects - Women\'s Solidarity Center',
  description: 'This page contains the list of projects of the center.',
  keywords:'Women\'s Solidarity Center, all projects, project, aid for migrants, volunteer and staff training, awareness about gender violence, support for orphans, self-defense'
})


const { data: projectsData} = await useFetch('/api/allProjects', { method: 'GET' })
const { data: peopleData} = await useFetch('/api/allWorkers', { method: 'GET' })
const projects = projectsData.value
const people = peopleData.value

const search = ref('');
const filteredProjects = computed(() => {
  return projects?.filter(project => {
   return project.name.toLowerCase().includes(search.value.toLowerCase());
  });
});



</script>

<template>

<Head>
    <Title> Our Projects</Title>
 </Head>

 <main>
  <Breadcrumb />
  <h1 class="text-center py-4 text-4xl font-semibold">Our Projects</h1>

  <div class="container py-4">
    <img src="\assets\banner\projects2-info.jpg" alt="projct banner" style="border-radius: 15px;">
  </div>

  <div class="text-center" style="color: #684551">
    <p class="text-xl"> Do you want to propose a new project and collaborate with us?</p>
    <p class="text-xl">Write an email to <a class="underline font-semibold" style="color: #684551;"href="mailto:exemple@mail.polimi.it">wcs@mail.polimi.it</a> </p>
  </div>

  <input
      v-model="search"
      type="text"
      placeholder="Search projects..."
      class="px-4 py-2 my-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-dark-pink focus:border-dark-pink"
  >

  <div class="project-box"> 
    <div v-if="projects"
        v-for="project in filteredProjects"
        :key="project.id"
        
        class="project-box-appear"
        style="color:black">

        <!-- Card component for activities -->

        <ActivityCard :name="project.name" :description="project.description" :to="'/AllActivities/OurProjects/'+project.id"></ActivityCard>
      
      </div>
  </div>
</main>
</template>

<style scoped>

.title
{
  text-align: center;
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-size: 2.25rem;
  font-weight: 600;
  padding: 20px;

}


.project-name
{
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: large;
  padding: 20px; 
}



.showmore-link
{
  color: #684551;
  text-decoration: underline;
  padding-top: 10px;

}

.project-box
{
  display: grid;
  grid-column: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
}

.project-box-appear {
  background-color: white; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 0.375rem; 
  overflow: hidden; 
  transition: transform 0.3s ease; 
  color: #4a4a4a
}

.project-box-appear:hover {
  transform: scale(1.05); 
  
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}


/* Apply 2 columns layout for medium-sized screens and above */
@media (min-width: 768px) {
  .project-box{
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
}

/* Apply 2 columns layout for large-sized screens and above */
@media (min-width: 1024px) {
  .project-box {
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
}
</style>