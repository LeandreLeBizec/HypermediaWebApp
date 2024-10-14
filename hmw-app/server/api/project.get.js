import { serverSupabaseClient } from '#supabase/server'
//retrieve project with a specific ID (to use in Project page)

export default defineEventHandler(async (e) => {
    const {projectId} = getQuery(e)

    const client = await serverSupabaseClient(e)

    const {data: Project, error: error} = await client.from('Project').select("*").eq('id', projectId).limit(1).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return Project
});