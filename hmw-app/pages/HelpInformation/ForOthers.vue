<script setup lang="ts">
useSeoMeta({
  title: 'Help Information - For Others - Women\'s Solidarity Center',
  description: 'This page contains information to help an user if they know a woman that is facing a situation of violence',
  keywords:'Women\'s Solidarity Center, gender-based violence, about violence on women, help information, physical violence, sexual violence, psychological violence, financial violence'
})


</script>

<template>
    <Head>
    <Title> Help Information - For Others </Title>
  </Head>

  <main>
  <Breadcrumb/>

  <div class="grid lg:grid-cols-2 mt-5 grid-cols-1">

    <div class="w-full "> <!-- decorative image-->
      <img src="../../assets/helpInfo/violence_forothers.jpg" alt="">
    
    </div>

    <div class=" place-self-center leading-relaxed pl-20 py-10">
      <h1 class="text-6xl font-semibold mb-6">Do you know someone that is experiencing gender-based violence?</h1>  
      <p class="text-lg text-transform: uppercase font-semibold text-balance mb-4">our center is open to all women that are experiencing any kind of violence.</p>
      <p class="text-balance"> It is not easy to address the subject if you suspect that a woman is a victim of violence. Witnessing violence and abuse on a loved one can take a toll on your mental health too. We can help you understand what to do to protect yourself and your loved ones.</p>
    </div>

  </div>

  <div class="mt-20">
    <h2 class="text-xl font-bold mb-2"> Gender-based violence can affect women in any social context. </h2>

    <div class=" border-l-light-pink border-l-4 pl-2">

      <p> While intimate partner violence is the most common form of violence experienced by women globally, gender based violence can also 
        occurr in other different forms. Domestic violence, harrassment on the workplace, violent behaviors in online spaces or technology-facilitate violence are all forms of violence can affect any woman. 
         </p>
         <p class="mt-2">Not sure if what you have witnessed is violence?
          Men's violence against women has many forms, and it's not necessarily physical.
          In any case, remember that you can turn to us if you have any doubts.</p>

      <!-- link to help information page -->
      <div class="mt-5">
        <NuxtLink to="/HelpInformation" class="" >
            <p class="font-bold hover:text-rose-400"> Read more on how to recognize gender-based violence</p>
        </NuxtLink>
      </div>
  
  
    </div>
    
  </div>

  <div class="mt-20">
    <p class="text-xl font-bold mb-2">Being a witness of violence on a loved one is not easy.</P>
    <p>Friends, relatives, partners often do not know how to deal with the situation and suffer the effects of the trauma on themselves.
        If you find yourself in this condition, a key step is to seek support for yourself and to support the woman next to you.</p>

    <div class="grid lg:grid-cols-2 justify-between mt-5 grid-cols-1 gap-4">
      <div class=" px-16 py-8 shadow-md rounded-lg ">
        <!-- for you -->
        <p class="text-xl font-bold mb-2">Take care of your mental health.</p>
        <p>Often discovering situation of abuse is disorienting and triggers strong reactions and judgmental thoughts. You could feel angry and impotent, or your fist reaction could be of blaming her for not 
          taking action or for behaving in unusual ways. Recognize that these feelings are common, but they're not helpful in supporting your loved one, and consider psychological support to be able to react in a constructive way to the situation.
        </p>
        <p class="text-xl font-bold mb-2 mt-5">Ask for help.</p>
        <p>Geet informed on the characteristics and dynamics of violence against women. Knowing more is essential to give valid advice. Consider calling one of our operators to express your doubts and assess the situation.
          Our operators will answer all your questions and will point you in the right direction for helping your loved one.
        </p>

      </div>

      <div class="  px-16 py-8 shadow-md rounded-lg">
        <!-- for her -->
        <p class="text-xl font-bold mb-2 ">Offer support.</p>
        <p>Give her a concrete support: read information with her, offer to accompany her to an anti-violence center first time. Give her a hand in managing daily difficulties, such as taking care of the house or children.
          Show her your willingness to listen and if she opens up to you, try to listen without judging. If she is not addressing the situation but you suspect something, raise the issue by asking the questions gently and without questioning them.
        In any case, respect her choice: if she doesn't want to talk about it, tell her that if she wants you are there. By showing constant support, she may be more willing to open up about her situation. </p>
          <p class="text-xl font-bold mb-2 mt-5 ">Don't leave her alone.</p>
          <p>Solitude and isolation are powerful ways in which the abuser is able to perpetrate his cycle of violence.
             Even if she's reluctant in receiving help, try to always keep in contact with her. 
             Show up to her house, offer to help with daily chores, try to be present in her life as much as possible. </p>

      </div>

    </div>

    <div class="flex flex-wrap lg:flex-nowrap justify-between text-center mt-20 bg-gradient-to-b from-rose-400 to-light-pink rounded-lg">
      <div class="w-full p-20">
        
        <p class="text-2xl font-bold mb-2">CALL US</p>
        <p class="text-lg font-semibold ">Our operators will answer all your questions. </p>
       
      </div>

      <div class=" w-full p-20">
        <p class="text-4xl font-bold uppercase  "><a href="tel:+39 1234567890">+39 1234567890</a></p>
      </div>

    </div>
  </div>

  <div class="mt-5">
    <NuxtLink to="/HelpInformation/ForYou" class="hover:text-rose-400 font-bold">Are you experiencing a situation of violence? We can help you</NuxtLink>
  </div>
</main>
</template>

<style scoped>
a {
  color:#684551 ;
}


</style>