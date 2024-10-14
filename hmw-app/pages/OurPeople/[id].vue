
<script setup lang="ts">

const route = useRoute()
const personId = route.params.id;

//retrieve a specific person
const { data : peopleData } = await useFetch('/api/allWorkers', { method: 'GET' });
const people = peopleData.value;
const person = people?.find((person) => person.id == personId);
const personFullName = person.name + " " + person.surname;

//Retrieve all the services
const { data: serviceData} = await useFetch('/api/allServices');
const services = serviceData.value;

//Retrieve all the projects 
const { data: projectsData} = await useFetch('/api/allProjects');
const projects = projectsData.value;

//filter services
function myServices(){
  if(services){
    return services.filter(service => Number(personId) === Number(service.manager_id));
  } else {
    return [];
  }
}

function servicesEmpty(){
  if ((myServices()).length> 0){
    return true
  } else {
    return false
  }
}

//filter projects
function myProjects(){
  if(projects){
    return projects.filter(project => Number(personId) === Number(project.manager_id));
  } else {
    return [];
  }
}

function projectsEmpty(){
  if ((myProjects()).length> 0){
    return true
  } else {
    return false
  }
}

const bioParagraphs = computed(() => {
  const sentences = person.bio.split('.');
  return sentences.reduce((acc, curr, index) => {
    if (index % 2 === 0 && index !== 0) {
      acc[acc.length - 1] += '. ' + curr;
    } else {
      acc.push(curr.trim());
    }
    return acc;
  }, []).filter(s => s.length > 0);
});

useSeoMeta({
  title: person.name + person.surname + '- Our People - Women\'s Solidarity Center',
  description: 'This page contains information about a specific person of the organization',
  keywords:'Women\'s Solidarity Center, person, services, projects'
})
</script>


<template>
    <Head>
    <Title>{{person.name}} {{ person.surname }} </Title>
  </Head>

  <main>
  <Breadcrumb :replaceIdWith="personFullName"/>
  <!--Title (name)-->
    <div class="col-start-1 col-span-1">
      <h2 class = "title"> {{ person.name }} {{ person.surname }}</h2>
    </div>
  <!--Expertise-->
  <div class="pt-0.5">
    <p class="expertise pb-3"> {{ person.role }}</p>
  </div>
  <!--Pic and description-->
  <div class="info-box md:grid md:grid-cols-3 md:gap-4 pt-4.5">
    <img v-bind:src="'/people/' + person.img_path + '.jpg'" alt="" class="md:col-span-1 rounded">
    <div class="md:col-span-2 text-justify">
      <p v-for="(paragraph, index) in bioParagraphs" :key="index" class="mb-4">
        {{ paragraph }}.
      </p>
    </div>
  </div>
  <!--Social icons-->
  <ul class="flex space-x-2 pt-4">
    <li>
      <p class="col-span-1">Find {{ person.name }} on social medias:</p>
    </li>
    <li>
      <a href="https://www.facebook.com" target="_blank" class="social-icon hover:text-white" :alt="'link to' + person.name + 'facebook page'" ><IconsFacebook/></a>
    </li>
    <li>
      <a href="https://www.instagram.com/" target="_blank" class="social-icon hover:text-white" :alt="'link to' + person.name + 'instagram page'"><IconsInstagram/></a>
    </li>
    <li>
      <a href="https://x.com" target="_blank" class="social-icon hover:text-white" :alt="'link to' + person.name + 'x page'"><IconsTwitter/></a>
    </li>
  </ul>
  <!--Person's services-->
  <div v-if="servicesEmpty()" class="grid grid-cols-1 pt-7">
    <h1 class="ps-title"> {{ person.name }}'s services</h1>
  </div>
  <div class="project-box">
    <nuxt-link v-if="services" v-for="service in myServices()" :key="service.id" :to="`/AllActivities/OurServices/${service.id}`" class="project-box-appear">
      <div class="p-4">
        <h2 class="project-name" style="color:black">{{ service.name }}</h2>
        <p class="text-justify line-clamp-6" style="color:black">{{ service.description }}</p>
        <button v-if="!service.showMore && service.description.length > 300" class="showmore-link" style="color: #684551">
          Click to read more
        </button>
      </div>
    </nuxt-link>
  </div>
  <!--Person's projects-->
  <div v-if="projectsEmpty()" class="grid grid-cols-1">
    <h1 class="ps-title"> {{ person.name }}'s projects</h1>
  </div>
  <div class="project-box">
    <nuxt-link v-if="projects" v-for="project in myProjects()" :key="project.id" :to="`/AllActivities/OurProjects/${project.id}`" class="project-box-appear">
      <div class="p-4">
        <h2 class="project-name" style="color:black">{{ project.name }}</h2>
        <p class="text-justify line-clamp-6" style="color:black">{{ project.description }}</p>
        <button v-if="!project.showMore && project.description.length > 300" class="text-dark-pink underline text-left">
          Click to read more
        </button>
      </div>
    </nuxt-link>
  </div>
</main>
</template>

<style scoped>
.title
{
  padding-top: 2rem;
  font-weight: 750;
  font-size: 2rem;
  text-transform: uppercase;
}

.expertise
{
  font-weight: 600;
  font-size: 1rem;
  color: #684551;

}

.social-icon{
  color: #684551;
  font-size: 1.25rem;
}

.project-name
{
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: large;
  padding: 20px;
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
}

.project-box-appear:hover {
  transform: scale(1.05);
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

.ps-title
{

  padding-top: 1rem;
  font-weight: 550;
  font-size: 1.50rem;

}

@media (min-width: 768px) {
  .info-box {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

</style>