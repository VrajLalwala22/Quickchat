import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";
import { GroupChatUserType, MessageType } from "@/types/chat";

export async function fetchChats(groupId: string): Promise<MessageType[]> {
    try {
        const res = await fetch(`${CHAT_GROUP_URL}/${groupId}/messages`, {
            next: {
                revalidate: 0 // Don't cache chat messages
            }
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch chat messages");
        }
        
        const response = await res.json();
        return response?.data || [];
    } catch (error) {
        console.error("Error fetching chats:", error);
        return [];
    }
}

export async function fetchChatGroupUsers(groupId: string): Promise<GroupChatUserType[]> {
    try {
        const res = await fetch(`${CHAT_GROUP_URL}/${groupId}/users`, {
            next: {
                revalidate: 60 // Cache for 1 minute
            }
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch group users");
        }
        
        const response = await res.json();
        return response?.data || [];
    } catch (error) {
        console.error("Error fetching group users:", error);
        return [];
    }
} 