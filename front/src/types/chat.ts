export type GroupChatType = {
    id: string;
    title: string;
    passcode: string;
    user_id: string;
    created_at: string;
}

export type GroupChatUserType = {
    id: number;
    group_id: string;
    name: string;
    created_at: string;
}

export type MessageType = {
    id: string;
    content: string;
    sender_name: string;
    group_id: string;
    created_at: string;
} 