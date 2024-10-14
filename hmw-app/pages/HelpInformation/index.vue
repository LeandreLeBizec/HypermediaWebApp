<script setup lang="ts">

useSeoMeta({
  title: 'Help Information - Women\'s Solidarity Center',
  description: 'This page contains general information about gender-based violence, and how to recognize it in its different forms.',
  keywords:'Women\'s Solidarity Center, gender-based violence, about violence on women, help information, physical violence, sexual violence, psychological violence, financial violence'
})

//content for violence sections
const violenceTypes = [
  {title: 'physical and sexual violence' ,
   text: 'Physical and sexual violence against women can manifest in multiple ways. '+
   'Intimate partner violence refers to behaviour by an intimate partner or ex-partner that causes physical, sexual or psychological harm, including physical aggression, sexual coercion, psychological abuse and controlling behaviours. This is one of the most common forms of violence experienced by women globally. '
   + 'Intimate partner violence is one of the manifestations of domestic violence. Domestic violence is violence that occurs within the private, domestic sphere, generally between individuals who are related through blood or intimacy. Domestic violence is not confined to women, for example it also includes child abuse and elderly abuse in the domestic sphere.'
   + 'Sexual violence is, in general, any sort of harmful or unwanted sexual behaviour that is imposed on someone. It includes acts of abusive sexual contact, forced engagement in sexual acts, attempted or completed sexual acts with a woman without her consent, sexual harassment, verbal abuse, threats, exposure, unwanted touching, incest, and others.'
  },
  {title: 'psychological violence',
    text: 'Any act which causes psychological harm to an individual is psychological violence. It can take the form of, for example, coercion, defamation, verbal insult or harassment.'
    +'Its significant characteristic is an abusive pattern of behaviour occurring over time – within or outside the family. '
    +'It not only affects individuals’ mental health and their social networks, but also deprives them of opportunities for future personal, social and economic development. Examples of psychological violence include acts such as isolation from others, verbal aggression, threats, intimidation, control, harassment or stalking, insults, humiliation and defamation.'
  },
  {title: 'financial violence',
   text: 'Financial abuse is a systematic behaviour where one person tries to control another person’s access to money. This kind of abuse often occurs between partners or other family members. Financial abuse is a form of family violence, and can be present with other forms of abuse, like physical or emotional abuse, but can also be present without these other behaviours.'
   +'Financially abusive behaviour can take many different forms such as controlling a family member’s money, stopping them from being financially independent or earning their own money.'
   +'Financial abuse is also a form of intimate partner violence, because it commonly occurs in romantic relationships. It can occur throughout a relationship, or may begin after separation through things like property settlement and child support processes.',
  }
];
</script>

<template>
  <Head>
    <Title> Help Information </Title>
  </Head>

  <main>
  <Breadcrumb/>
  <!-- page title and image-->
 <div class="lg:grid lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-4">
  <div class="xl:col-span-2 mt-4">
    <h1 class="text-6xl  font-semibold text-balance mb-6">Violence has many faces</h1>
    <p class="text-lg text-transform:uppercase font-semibold text-balance mb-4">we can help you understand if you're living in a situation of violence.</p>
    <p class="text-balance "> In societies shaped by patriarchy, violence against women is an expression of unequal power relationships between men and women. Violence against women does not mean only physical violence. It is much broader and includes sexual, emotional, psychological and financial abuse.</p>
  </div>
  <img class="mt-4" src="../../assets/helpInfo/violence_faces.jpg" alt="">
 </div>
<div>
  <!-- types of violence section with accordion component -->
  <Accordion :items="violenceTypes" class="mt-10"></Accordion>
</div>
<div class="flex justify-between mt-10 flex-wrap lg:flex-nowrap gap-4 lg:gap-6">
  <!-- for you -->
  <NuxtLink to="/HelpInformation/ForYou" class="helpLink w-full p-20  bg-gradient-to-br from-rose-400 to-light-pink text-center rounded-lg  cursor-pointer transition-transform transform hover:scale-105">
    <h2 class="text-2xl font-bold mb-4 uppercase text-balance ">do you seek assistance?</h2>
    <p class="text-lg font-semibold uppercase text-balance"> we're here to help you.</p>
  </NuxtLink>
  <!-- for others -->
  <NuxtLink to="/HelpInformation/ForOthers" class="helpLink w-full p-20  bg-gradient-to-bl from-rose-400 to-light-pink text-center rounded-lg  cursor-pointer transition-transform transform hover:scale-105">
    <h2 class="text-2xl font-bold mb-4 uppercase text-balance ">do you know someone that is in danger?</h2>
    <p class="text-lg font-semibold uppercase  text-balance"> here's what you can do.</p>
  </NuxtLink>
</div>
</main>
</template>

<style scoped>
a {
  color:#684551 ;
}
</style>