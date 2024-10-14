<script setup lang="ts">
import '@mdi/font/css/materialdesignicons.css'
const { data: projectsData} = await useFetch('/api/allProjects', { method: 'GET' })
const { data: servicesData} = await useFetch('/api/allServices', { method: 'GET' })
const projects = projectsData.value
const services = servicesData.value

useSeoMeta({
  title: 'Home Page - Women\'s Solidarity Center',
  description: 'Home PAge for the website',
  keywords:'Women\'s Solidarity Center, about the center, project, services, help information'
})

</script>

<template>
  <Head>
    <Title> Home Page </Title>
  </Head>

<main>
<!-- HEADER SECTION -->
<div class="flex justify-between bg-cover relative scroll-smooth overflow-y-auto flex-grow mt-5 rounded-lg">
    <div class="bg-dark-pink/40">
      <img src="\assets\homePageImg.jpg" alt="main image for homepage" class=" object-cover brightness-50 mix-blend-multiply">
    </div>

    <div class="absolute m-8 lg:m-20 text-balance text-left text-white">
      <h1 class="text-3xl lg:text-6xl font-semibold" role="main" aria-label="main">ON WOMEN'S SIDE AGAINST VIOLENCE</h1>
      <NuxtLink to="/TheCenter">
        <div class="pt-10">
          <button  class="border-2 rounded-md  text-xl font-bold overflow-hidden transition-transform hover:scale-105" style="color:white" role="button">
            <p class="px-3 py-3"> ABOUT THE CENTER </p>
          </button>
        </div>
      </NuxtLink>  
    </div>
</div>


  <!-- HELP SECTION -->
  <div class="flex justify-between mt-10 flex-wrap lg:flex-nowrap gap-4 xl:gap-6 pb-10">
    <NuxtLink to="/HelpInformation/ForYou" class="help-blocks bg-gradient-to-br from-purple-400 to-purple-100">
      <h2 class="text-2xl font-bold mb-4" style="color:black">Do you need help?</h2>
      <p style="color:black">Our center is open, don't be scared to ask for help</p>
    </NuxtLink>
    <NuxtLink to="/HelpInformation/ForOthers" class="help-blocks2 bg-gradient-to-br from-rose-400 to-light-pink">
      <h2 class="text-2xl font-bold mb-4" style="color:#684551">Does someone need help?</h2>
      <p style="color:#684551">See what you can do to help someone</p>
    </NuxtLink>
  </div>


  <!-- SERVICES CAROUSEL -->
  <div>
    <h3 class=" text-3xl font-bold p-5 mb-4"> Discover our services </h3>
    <b-carousel class="carousel" icon-size="is-large">
      <b-carousel-item v-for="service, i in services":key="i" class="">
        <section class="relative">
          <NuxtLink :to="'/AllActivities/OurServices/'+service.id" >
            <div class="absolute z-20 lg:m-20 m-10 text-white ">
              <h3 class="text-3xl lg:text-6xl bold">{{ service.name }}</h3>
              
            </div>
    
            <b-image v-bind:src="'/services/' + service.img_path + '.jpg'" :alt="'link to ' + service.name" responsive=true class="carousel-img brightness-50" loading="eager" role="none"></b-image>

          </NuxtLink>
          
        

        </section>
        
    
      </b-carousel-item>

    </b-carousel>

    <div class="lg:grid-cols-4 bg-white  hover:bg-rose-200   ease-in-out duration-300">
      <NuxtLink to="/AllActivities/OurServices" class= "text-center text-xl px-3 py-0.5  hover:scale-105" style="color:#684551"> 
        <h2 class="text-xl font-bold"> See all the services </h2>
      </NuxtLink>
    </div>

  </div>

  <!-- PROJECTS CAROUSEL-->
  <div>
    <h3 class=" text-3xl font-bold p-5 mb-4"> Discover our projects </h3>
    <b-carousel class="carousel" icon-size="is-large">
      <b-carousel-item v-for="project, i in projects":key="i" class="">
        <section class="relative ">
          <NuxtLink :to="'/AllActivities/OurProjects/'+project.id">
            <div class="absolute z-20 lg:m-20 m-10 text-white ">
              <h3 class="text-3xl lg:text-6xl bold">{{ project.name }}</h3>
            </div>
            <b-image v-bind:src="'/projects/' + project.img_path + '.jpg'" :alt="'link to ' + project.name" responsive=true class="carousel-img brightness-50" loading="eager" role="none"></b-image>

          </NuxtLink>
     
        </section>
      </b-carousel-item>

    </b-carousel>
    <div class=" activities-link lg:grid-cols-4 bg-white  hover:bg-rose-200   ease-in-out duration-300">
      <NuxtLink to="/AllActivities/OurProjects" class= " text-center text-xl px-3 py-0.5" style="color:#684551" > 
        <h2 class="text-xl font-bold"> See all the projects </h2>
      </NuxtLink>
    </div>
  </div>


  <!-- CONTACTS SECTION -->
  <div class="grid grid-cols-1 pt-10">
    <div class="purpleback bg-gradient-to-br from-rose-400 to-light-pink rounded-md pt-10 pb-10 text-center" style="color:#684551">
      <h2 class="text-5xl font-bold" > CALL US IF YOU NEED HELP </h2>
      <p class="text-3xl font-bold pt-5" role="heading"> +02 123456789</p>
      <NuxtLink to="/Contact">
        <div class="py-3">
          <button  class="border-2 rounded-md text-xl font-semibold overflow-hidden transition-transform hover:scale-105" style="color:#684551"> 
            <p class="px-3 py-3"> Our Contacts </p>
          </button>
        </div>
      </NuxtLink>  
      
    </div>
  </div>
</main>
</template>


<style scoped>


.help-blocks {
  width: 100%; /* equivalent to w-full */
  padding: 2.5rem; /* equivalent to p-10 */
  text-align: center; /* equivalent to text-center */
  border-radius: 0.5rem; /* approximate for rounded-lg */
  cursor: pointer; /* equivalent to cursor-pointer */
  transition: transform 0.2s; /* standard transition for transform properties */

  /* hover effect */
  &:hover {
    transform: scale(1.05); /* equivalent to hover:scale-105 */
  }
}

.help-blocks2 {
  width: 100%; /* equivalent to w-full */
  padding: 2.5rem; /* equivalent to p-10 */
  text-align: center; /* equivalent to text-center */
  border-radius: 0.5rem; /* approximate for rounded-lg */
  cursor: pointer; /* equivalent to cursor-pointer */
  transition: transform 0.2s; /* standard transition for transform properties */

  /* hover effect */
  &:hover {
    transform: scale(1.05); /* equivalent to hover:scale-105 */
  }
}

.activity-box
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
}

.activity-appear {
  background-color: white; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 0.375rem; 
  overflow: hidden; 
  transition: transform 0.3s ease; 
}

.activity-appear:hover {
  transform: scale(1.05); 
}

.project-name
{
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: large;
  padding: 20px; 
}

/* line-clamp not working, why? */
.project-descr
{
  text-align: justify;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.showmore-link
{
  color: #684551;
  text-decoration: underline;
  padding-top: 10px;

}

.purpleback
{
  height: auto;
  width: auto;
}


/* Apply 2 columns layout for medium-sized screens and above */
@media (min-width: 768px) {
  .project-box{
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
}

/* Apply 2 columns layout for large-sized screens and above */
@media (min-width: 1024px) {
  .project-box {
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
}



.carousel-img{
  object-fit: cover;
}




</style>