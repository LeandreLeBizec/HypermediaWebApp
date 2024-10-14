import { serverSupabaseClient } from '#supabase/server'
//add newsletter subscription 

export default defineEventHandler(async (e) => {
    const {email} = getQuery(e)
    const{name} = getQuery(e)

    console.log(email);
    console.log(name);
    const client = await serverSupabaseClient(e) 
    let errorFlag = false

    const {error: error} = await client.from('NL_Subscription').insert({name: name, email: email })

    if(error) {
        errorFlag = true
        console.log('insertion error')
    }

    return errorFlag
});