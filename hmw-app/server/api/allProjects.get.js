import { serverSupabaseClient } from '#supabase/server'
//retrieve the projects (to use in the projects intro page)


export default defineEventHandler(async (e)=>{
    const client = await serverSupabaseClient(e) 
    
    const {data: Project , error: error} = await client.from('Project').select("*")

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return Project
})