<script setup lang="ts">

const props = defineProps(['name', 'description', 'to'])


</script>

<template>
    <NuxtLink :to="props.to" class="card">
        <div class="p-4">
            <h2 class="project-name">{{ name }}</h2>
            <p class="text-justify line-clamp-6"> 
                {{ description }}
            </p>
            <button  class="showmore-link">
                Click to read more
            </button>
        </div>
    </NuxtLink>
</template>

<style scoped>
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
.card{
    color: #4a4a4a;
}
</style>