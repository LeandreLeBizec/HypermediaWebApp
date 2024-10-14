import axios from 'axios';

export default defineNuxtPlugin(() => {
    const openai = axios.create({
        baseURL: 'https://api.openai.com/v1/chat',
        headers: {
            'Authorization': `Bearer ` /*+ your openAI key*/,
            'Content-Type': 'application/json'
        }
    });

    return {
        provide: {
            openai: openai
        }
    };
});

