<script setup lang="ts">
let open = ref(false);
let subMenuOpen = ref<Record<string, boolean>>({});
let mobileScreen = ref(false);

let links = [
  { name: "The Center", link: "/TheCenter"},
  { name: "Help Information", link: "/HelpInformation",  subMenu: [
      {name: "For You", link: "/HelpInformation/ForYou"},
      {name: "For Others", link: "/HelpInformation/ForOthers"},
    ]},
  { name: "Our People", link: "/OurPeople" },
  { name: "Activities", link: "/AllActivities", subMenu: [
      { name: "Our Services", link: "/AllActivities/OurServices"},
      { name: "Our Projects", link: "/AllActivities/OurProjects"},
    ]},
  { name: "Contact", link: "/Contact"},
];

function MenuOpen() {
  open.value = !open.value;
}

function toggleSubMenu(name: string) {
  subMenuOpen.value[name] = !subMenuOpen.value[name];
}

function closeSubMenu(name: string){
  if(!mobile()){
    subMenuOpen.value[name]=false;
  }
  
}

function mobile() : Boolean {
  return mobileScreen.value = window.innerWidth < 1024
}
</script>



<template>
  <div class="bg-white text-dark-pink px-6 shadow lg:flex justify-between items-center fixed w-full top-0 z-50">
    <div class="flex items-center cursor-pointer">
      <NuxtLink to="/" class="mr-2">
        <img class="w-16" src="../assets/logo.png" alt="website logo" >
      </NuxtLink>
      <NuxtLink to="/" class="hidden sm:block sm:text-xl lg:hidden xl:block xl:text-xl 2xl:text-4xl text-dark-pink">Women's Solidarity Center</NuxtLink>
    </div>

    <div @click="MenuOpen()"  class="absolute lg:hidden right-6 top-1.5 mt-4 cursor-pointer text-4xl">
      <div class="">
        <IconsHamburger v-if="!open" />
        <IconsClose v-else />
      </div>
    </div>

    <div class="lg:flex justify-between lg:pb-0 pb-10 lg:static absolute bg-white lg:w-auto w-full top-22 duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <div class="lg:mx-2 lg:my-0 my-4.5 px-2 2xl:px-4" v-for="link in links" :key="link.name">
        <div>
          <b-button v-if="!link.subMenu" class="dropdown" type="is-ghost">
            <NuxtLink v-if="!link.subMenu" :to="link.link" class=" text-xl  font-semibold  hover:underline text-dark-pink" @click="MenuOpen()">
              {{link.name}}
            </NuxtLink >
          </b-button>
          <b-dropdown v-if="link.subMenu" :triggers="['hover']" aria-role="list" >
            <template #trigger>
              <b-button class="dropdown" type="is-ghost">
                <NuxtLink :to="link.link" class="text-dark-pink">{{ link.name }}</NuxtLink>
              </b-button>
            </template>
            <b-dropdown-item v-for="subLink in link.subMenu" :key="subLink.name" has-link aria-role="listitem">
              <NuxtLink :to="subLink.link" class="text-xl font-semibold text-dark-pink hover:underline w-full">
                {{subLink.name}}
              </NuxtLink>
            </b-dropdown-item>
          </b-dropdown>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.dropdown{
  background:none;
  color: #684551;
  font-weight: 600;
  font-size: 1.25rem; /* 20px */
}

.dropdown:hover{
  background: white;
  color: #684551;
  text-decoration: underline;
}
</style>




