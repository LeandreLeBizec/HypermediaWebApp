<script setup lang="ts">
useSeoMeta({
  title: 'Contacts - Women\'s Solidarity Center',
  description: 'This page contains The Center\'s contact information, like e-mail and phone numbers, The Center\'s location and opening hours',
  keywords:'Women\'s Solidarity Center, contacts, phone number, WhatsApp, e-mail, where to find us, opening hours'
  

})

</script>

<template>

  <Head>
    <Title> Contacts </Title>
  </Head>

  <main>
  <Breadcrumb/>
   <!--banner-->
  <div class="flex justify-between bg-cover relative scroll-smooth overflow-y-auto flex-grow mt-5 rounded-lg">
    <div class="bg-dark-pink/60"> <!--decorative image-->
      <img src="../assets/contacts/colleagues-working-together-call-center-office.jpg" alt="" class=" object-cover brightness-50 mix-blend-multiply" loading="eager">
    </div>
    <div class="absolute m-8 lg:m-20 text-balance text-left text-white">
      <h1 class=" size-full text-3xl lg:text-6xl font-semibold mb-4  ">CALL US</h1>
      <h1 class="size-full text-3xl lg:text-6xl font-semibold">+39 1234567890</h1>
      <div class="text-xl font-semibold mt-8 ">
        <p>If you fear for yours or someone else's safety, get in touch. </p>
        <p>All calls are confidential. </p>
      </div>
      
    </div>
    
  </div>

  <div class="flex-col justify-between mt-10 leading-relaxed ">
    <h2 class="text-xl font-semibold ">
      If you feel scared of your partner or are worried about someone you know, get in touch with us. </h2>
    <p> We know that it can be difficult to pick up the phone and ask for help, but know that you will be answered by experienced counsellors who have a lot of experience in supporting people affected by domestic violence and abuse.
        The person who answers the phone will listen to you talk about your experience and try to find solutions with you that will keep you and your children safe.
    </p>
    <p class="font-semibold mt-5">
      Contact us if you want to know more about our services or projects. You can call us to book an appointment, or to simply talk with one of our operators. If you feel more confortable contacting us through text, you can send an SMS or WhatsApp message to the number at the end of the page.
    </p>
    <p>Remember that our center is open to all women regardless of their citizenship, ethnicity, sexual orientation and gender identity.</p>
  </div>

  <!--location, opening hours and map-->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between leading-relaxed mt-8 border-s-slate-200 border-l-2">
    <div class="bg p-10">
      <h3 class="text-3xl font-semibold mb-5">Where you can find us</h3>
      <div class="text-xl">
        <p>Women's Solidarity Center</p>
        <p>Via Ampere 1</p>
        <p>20131 Milano</p>
      </div>
      <h3 class="text-3xl font-semibold mb-5 mt-10">Opening hours</h3>
      <ul class="text-xl mb-5">
        <li>Monday-Friday: 9-19</li>
        <li>Saturday-Sunday: 10-17</li>
      </ul>
      <p>Services are available Monday through Friday, while the center is open also during weekdays to offer assistance to women in emergency situations.</p>
      <p>Our operators will answer your calls during opening hours, calls received while the center is closed will be recorded in our voicemail, which is listened to regularly.</p>
    </div>
    <!-- map -->
    <div class="h-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.54308976825!2d9.223885075801793!3d45.47900733245136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f17f3bdc79%3A0x9254fc582e50243c!2sVia%20Andrea%20Maria%20Amp%C3%A8re%2C%201%2C%2020133%20Milano%20MI%2C%20Italie!5e0!3m2!1sfr!2sfr!4v1717159850199!5m2!1sfr!2sfr" class="w-full h-full border-0" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      alt="link to google map that shows the center's location"></iframe>
    </div>
  </div>


 <!-- contacts list -->
  <div class="mt-20">
    <h4 class="text-3xl font-semibold mb-4">All Our Contacts</h4>
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-stretch text-center rounded-lg shadow-inner lg:divide-x lg:divide-y-0 divide-y divide-slate-200 p-4 ">
      <div class="w-full p-4 ">
        <p class="text-xl font-semibold" >Phone Number </p>
        <p class="text-3xl font-semibold mt-2" ><a href="tel:+02 1234567890">+02 1234567890</a></p>
      </div>
      <div class="w-full p-4 ">
        <p class="text-xl font-semibold" >WhatsApp</p>
        <p class="text-3xl font-semibold mt-2" ><a href="tel:+39 1234567890">+39 1234567890</a></p>
      </div>
      <div class="w-full p-4 ">
        <p class="text-xl font-semibold" >E-mail</p>
        <p class="text-3xl font-semibold mt-2" ><a href="mailto:exemple@mail.polimi.it">wcs@mail.polimi.it</a></p>
      </div>
    </div>
  </div>
  </main>
 

  

</template>

<style scoped>
a {
  color:#684551 ;
}


</style>