import { serverSupabaseClient } from '#supabase/server'
//retrieve person with a specific ID (to use in OurPeople page)

export default defineEventHandler(async (e) => {
    const {id} = getQuery(e)
    
    const client = await serverSupabaseClient(e) 

    const {data: Person, error: error} = await client.from('Person').select("*").eq('id', id).limit(1).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return Person
});