import ChatBase from '@/components/chat/ChatBase';
import React from 'react'

export default function chat({params}:{params:{id:string}}) {
    console.log("The Group Id is",params.id);
  return (
    <div>
      <h1>Chat Page</h1>
      <ChatBase />
    </div>
  )
}