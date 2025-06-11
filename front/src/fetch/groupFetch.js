import { CHAT_GROUP_URL } from "@/lib/apiEndPoints"


export async function fetchChatGroups(token){
    const res = await fetch(CHAT_GROUP_URL , {
        headers:{
            Authorization:token
        },
        next:{
            revalidate:60*60,
            tags:["dashboard"]
        }
    })
    if(!res.ok){
        throw new Error("Failed to fetch chat groups")
    }
    const response = await res.json()
    if(response?.data){
        return response?.data
    }
    return [];
}