import { serverSupabaseClient } from '#supabase/server'
//retrieve testimonials of a specific service (to use in Testimonials page)

export default defineEventHandler(async (e)=>{
    
    const {serviceId} = getQuery(e)


    const client = await serverSupabaseClient(e)

    const {data: Testimonial, error:error} = await client.from('Testimonial').select("*").eq('service_id', serviceId)

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }


    return Testimonial
});