import { serverSupabaseClient } from '#supabase/server'

//retrieve all members of the staff

export default defineEventHandler(async (e) => {
    
    const client = await serverSupabaseClient(e)

    const {data: Person, error: error} = await client.from('Person').select('*'); 

    //console.log("data fetched:", OurPeople);

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return Person
});