import ChatBase from "@/components/chat/ChatBase";
import { fetchChats, fetchChatGroupUsers } from "@/fetch/chatsFetch";
import { fetchChatGroups } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";
import { GroupChatType, GroupChatUserType, MessageType } from "@/types/chat";

export default async function chat({ params }: { params: { id: string } }) {
  if (params.id.length !== 36) {
    return notFound();
  }
  const chatGroup: GroupChatType | null = await fetchChatGroups(params.id);
  if (chatGroup === null) {
    return notFound();
  }
  const chatGroupUsers: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(params.id);
  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div>
      <ChatBase groupId={chatGroup.id} users={chatGroupUsers} oldMessages={chats} />
    </div>
  );
}