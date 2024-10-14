<script setup lang="ts">

// Params
const route = useRoute();
const projectId = ref(route.params.id);

//retrieve workers
const { data : peopleData } = await useFetch('/api/allWorkers', { method: 'GET' });
const people = peopleData.value;

//retrieve project
const { data : projectData } : any = await useFetch('/api/project', { method: 'GET', query:{projectId: projectId.value} });
const project = projectData.value


//retrieve manager
const manager = people?.find((person) => person.id == project.manager_id);

useSeoMeta({
  title: project.name + '- Our Projects - Women\'s Solidarity Center',
  description: 'This page contains a description about a specific project of the center',
  keywords:'Women\'s Solidarity Center, project, manager'
})
</script>
<head>

</head>


<template>

  <Head>
    <Title> {{ project.name }}</Title>
 </Head>

 <main>
  <Breadcrumb :replaceIdWith="project.name"/>
  <div>
    <h1 class="title">{{project.name}}</h1>
  </div>

  <div>
    <h3 class="manager"> Managed by:         
      <NuxtLink :to="`/OurPeople/${manager.id}`" class="manager" style="text-decoration: underline">
        {{ manager.name }} {{ manager.surname }}
      </NuxtLink> 
    </h3>
  </div>


  <div class="grid grid-cols-1">
    <!-- Project's description -->
    <div class="pdescr-box">
      <img v-bind:src="'/projects/' + project.img_path + '.jpg'" alt="" class="col-span-3 h-auto w-full object-cover bg-gray-300" style="border-radius: 15px;">
      <div class="col-span-2 text-justify">
        {{project.description}}
      </div>
    </div>

    <div v-if="project.id === 3" class="font-bold" style="color: #684551;">
      <p>If you're interested in applying as volunteer, please contact the center at <a class="underline font-bold" style="color: #684551;"href="mailto:exemple@mail.polimi.it">wcs@mail.polimi.it</a></p>
    </div>
  </div>
</main>
</template>

<style>
  
  .title
  {
    text-align: center;
    padding-top: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.25rem;
  }

  .manager
  {
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
    color:#684551;
    padding-bottom: 1.5rem;
  }

  .manager-box
  {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-top: 2rem;
    gap: 1rem;
  }
 
  .pdescr-box
  {
    display: grid;
    grid-template-columns:  repeat(1, minmax(0, 1fr));
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap:1rem;

  }

  @media (min-width: 768px) {
    .manager-box {
      grid-template-columns: repeat(3, minmax(0, 1fr)); 
    }
  }

  @media (min-width: 768px) {
    .manager-box {
      grid-template-columns: repeat(3, minmax(0, 1fr)); 
      padding-top: 2.5rem;
      padding-bottom: 2.5rem; 
    }
  }


</style>
