type ChatGroupType = {
    id:string;
    title:string;
    passcode:string;
    user_id:string;
    created_at:string;
}

export type {ChatGroupType}

type GroupChatUserType = {
    id:number;
    name:string;
    group_id:string;
    created_at:string;
}

export type {GroupChatUserType}