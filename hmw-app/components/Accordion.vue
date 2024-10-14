<script setup lang="ts">
import type { PropType } from 'vue';

interface violenceType{
  title: string,
  text: string
}

const props = defineProps({
    items: {
        type: Array as PropType<violenceType[]>,
        required: true
    },
    
})
const list = ref(props.items.map((item:any) =>{
    return {...item, open:false} ;
}))

function toggleAccordion(item:any){
    item.open = !item.open;
}
</script>

<template>


    <div class="flex-col justify-between shadow-md rounded-lg divide-2 divide-solid divide-slate-200">
        <div v-for="(item, index) in list" :key="index" class="">
            <button class="flex w-full justify-between p-6 text-2xl font-semibold uppercase "
            @click="toggleAccordion(item)" >
                <p class="">{{ item.title }}</p>
                
                <IconsDropDown class="self-center"/>
            </button>
            <Transition>
                <div v-show="item.open" class="py-10 px-20 text-justify border-t-2 border-slate-200 whitespace-pre-line" >
                    <p> {{ item.text }}</p>

                </div>
            </Transition>
           

        </div>
    </div>

</template>

<style scoped>
.v-enter-active {
  transition: all 0.5s ease-in;
}

.v-leave-active {
  transition: all 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-20px);
  
}
</style>