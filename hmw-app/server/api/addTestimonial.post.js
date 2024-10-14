import { serverSupabaseClient } from '#supabase/server'
//add service testimonial 

export default defineEventHandler(async (e) => {
    const {serviceId} = getQuery(e)
    const {description} = getQuery(e)

    console.log(description);
    console.log(serviceId);
    
    const client = await serverSupabaseClient(e) 
    let errorFlag = false

    //const {error: error} = await client.from('NL_Subscription').insert({name: serviceId, email: description })
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const randomNumber = getRandomNumber(23, 1000);

    const {error: error} = await client.from('Testimonial').insert({id: randomNumber, service_id: serviceId, description: description })

    if(error) {
        errorFlag = true
        console.log('insertion error')
    }

    return errorFlag
});