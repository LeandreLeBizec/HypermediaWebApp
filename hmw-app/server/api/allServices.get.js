import { serverSupabaseClient } from '#supabase/server'
//retrieve all the services (to use in services intro page)

export default defineEventHandler(async (e)=>{
    const client = await serverSupabaseClient(e)

    const {data: Service, error: error} = await client.from('Service').select("*");

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return Service
})

