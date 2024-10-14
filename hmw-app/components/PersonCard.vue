<script setup lang="ts">
const props = defineProps(['name', 'surname', 'role', 'img_path', 'id'])
</script>
<template>

    <div class="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
        <nuxt-link :to="`/OurPeople/`+props.id"  style="color:#4a4a4a">

            <img v-bind:src="'/people/' + props.img_path + '.jpg'" :alt="'link to ' + props.name + props.surname"  class="w-full h-48 object-cover">
            <div class="p-4">
            <p class="text-xl text-center font-semibold">{{ name }} {{ surname }}</p>
            <p class="text-gray-600 text-center">{{ role }}</p>
            
            </div>
        </nuxt-link>

    </div>

</template>
<style scoped> 
</style>