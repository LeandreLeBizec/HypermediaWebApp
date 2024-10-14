import { serverSupabaseClient } from '#supabase/server'
//retrieve service with a specific ID (to use in Service page)

export default defineEventHandler(async (e) => {
    const {serviceId} = getQuery(e)
    
    const client = await serverSupabaseClient(e)

    const {data: Service, error:error} = await client.from('Service').select("*").eq('id', serviceId).limit(1).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return Service
});