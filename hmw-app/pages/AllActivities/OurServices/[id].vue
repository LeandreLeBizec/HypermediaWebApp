<script setup lang="ts">
// Params
const route = useRoute();
const serviceId = ref(route.params.id);

//Service
const { data : testimonialsData } : any = await useFetch('/api/testimonials', { method: 'GET', query:{serviceId: serviceId.value} });
const testimonials = testimonialsData.value;

//Testimonial
const { data : serviceData } : any = await useFetch('/api/service', { method: 'GET', query:{serviceId: serviceId.value} });
const service = serviceData.value

// Manager
const managerId = ref(service.manager_id)
const { data : managerData } = await useFetch('/api/person', { method: 'GET', query:{id:managerId.value } });
const manager = managerData.value

// Modal
const selectedTestimonial = ref(null);
const isModalOpen = ref(false);

function openModal(testimonial : any) {
  selectedTestimonial.value = testimonial;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}


let testimonial = {
  sId: serviceId,
  description:'',
}

const hasError = ref(false)
const success = ref(false)

async function addTestimonial(){
  
  const description = ref(testimonial.description)
  const serviceId = ref(testimonial.sId)
 
  const {data: errorFlag} = await useFetch('/api/addTestimonial', { method: 'POST', query:{serviceId: serviceId.value, description: description.value}});

  if(errorFlag.value){
    hasError.value =  true
    success.value =  false
  }else{
    hasError.value = false
    success.value = true
  }
  if(success.value == true){
    testimonial.description = '';
  }
}

async function refreshPage(){
  window.location.reload();
}


useSeoMeta({
  title: service.name + '- Our Services - Women\'s Solidarity Center',
  description: 'This page contains a description, practical information and testimonials about a specific service of the center',
  keywords:'Women\'s Solidarity Center, service, manager, map, testimonial'
})
</script>

<template>
  <Head>
    <Title> {{ service.name }}</Title>
  </Head>

  <main>
  <Breadcrumb :replaceIdWith="service.name"/>
  <h1 class="text-center py-4 text-4xl uppercase font-semibold">{{service.name}}</h1>
  
  <div class="grid grid-cols-1">
    <!-- Service's description -->
    <div class="pdescr-box">
      <img img v-bind:src="'/services/' + service.img_path + '.jpg'" alt="" class="col-span-3 h-auto w-full object-cover bg-gray-300" style="border-radius: 15px;">
      <div class="col-span-2 text-justify">
        {{service.description}}
      </div>
    </div>


    <!-- Practical info -->
    <div class="grid grid-cols-1 md:grid-cols-3 py-6 md:py-10 gap-4">
      <div class="col-span-1">
        <h2 class="text-3xl font-semibold mb-4">Practical Informations</h2>
        <p>Women's Solidarity Center</p>
        <p>Via Ampere 1</p>
        <!-- Manager -->
        <h3 class="text-xl font-semibold my-4">Manager</h3>
        <div class="grid grid-cols-3 gap-4">
          <img v-bind:src="'/people/'+manager.img_path+'.jpg'" :alt="manager.img_descr" class="col-span-1 rounded">
          <div class="col-span-2">
            <p>{{manager.name}} {{manager.surname}}</p>
            <NuxtLink :to="`/OurPeople/${manager.id}`" class="text-dark-pink underline">more about {{manager.name}} {{manager.surname}}</NuxtLink>
          </div>
        </div>
      </div>
      <!-- Map -->
      <div class="col-span-2 h-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.54308976825!2d9.223885075801793!3d45.47900733245136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f17f3bdc79%3A0x9254fc582e50243c!2sVia%20Andrea%20Maria%20Amp%C3%A8re%2C%201%2C%2020133%20Milano%20MI%2C%20Italie!5e0!3m2!1sfr!2sfr!4v1717159850199!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <!-- Testimonials -->
    <div class=" py-6 md:py-10">
      <h2 class="text-2xl font-semibold mb-4">Testimonials</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="testimonial in testimonials" :key="testimonial.id" @click="openModal(testimonial)" class="p-4 flex flex-col justify-between min-h-full bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 mx-2 my-2">
            <div class="flex-grow">
              <p class="text-justify line-clamp-6"> {{ testimonial.description }}</p>
            </div>
            <button class="text-dark-pink underline text-left">Click to read more</button>
          </div>
        </div>
      </div>
      <!-- Testimonial modal -->
      <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- A background overlay -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <!-- The actual modal -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-justify overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <p v-if="selectedTestimonial">{{ selectedTestimonial.description }}</p>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" @click="closeModal" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Add testimonial-->
    <form @submit.prevent="addTestimonial" class=" grid grid-cols-1 gap-1 ">
        <p><B>Write a testimonial</B></p>
        <p>All testimonials will be anonymous to protect women and their thoughts</p>

        <!--<input type="text" required v-model="testimonial.description" placeholder="Description (max. 100 words)" class="px-4 py-2 my-2 w-100 h-24 border rounded-md ">-->
        <b-field :type="{'is-danger':hasError, 'is-success':success}" :message="[{'Ops! Something went wrong':hasError},{'Testimonial sent with success':success}]"> 
          <b-input type="text" required v-model="testimonial.description" placeholder="Description (max. 500 characters)" maxLenght="500" class="pt-4 custom-input"></b-input>
        </b-field>

        <div class="center-div">
          <button @click="refreshPage" type="submit" class="button">Send</button>
        </div>
    </form>
  </main>
</template>

<style>
  .center-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    padding: 8px 16px;
    border: 1px solid #684551; /* colore scuro del rosa */
    background-color: transparent;
    color: #684551; /* colore scuro del rosa */
    border-radius: 8px;
    transition: all 0.3s; /* transizione fluida */
  }

  .button:hover {
    background-color: #684551; /* colore scuro del rosa */
    color: white;
  }

  .custom-input {
  box-shadow: none; /* Rimuove il bordo esterno ombreggiato */
  border: none; /* Rimuove il bordo dell'input */
  }

  .pdescr-box
  {
    display: grid;
    grid-template-columns:  repeat(1, minmax(0, 1fr));
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap:1rem;

  }
</style>
