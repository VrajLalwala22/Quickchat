import ChatBase from "@/components/chat/ChatBase";
import { fetchChatGroups } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";
import { GroupChatType, GroupChatUserType, MessageType } from "@/types/chat";
import { ChatGroupType } from "../../../../types";
import { fetchChatGroup } from "@/fetch/chatsFetch";

export default async function chat({params}:{params:{id:string}}) {
  if (params.id.length !== 36) {
    return notFound();
  }
  const group: ChatGroupType | null = await fetchChatGroup(params.id);
  if (!group) {
    return notFound();
  }

  return (
    <div>
      <ChatBase group={group} users={[]} oldMessages={[]} />
    </div>
  )
}