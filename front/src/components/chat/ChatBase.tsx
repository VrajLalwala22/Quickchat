"use client"
import { getSocket } from '@/lib/socket.config';
import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';
import { GroupChatUserType, MessageType } from '@/types/chat';

interface ChatBaseProps {
  groupId: string;
  users: GroupChatUserType[];
  oldMessages: MessageType[];
}

export default function ChatBase({ groupId, users, oldMessages }: ChatBaseProps) {
  const [messages, setMessages] = useState<MessageType[]>(oldMessages);
  
  let socket = useMemo(()=>{
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(()=>{
    socket.on("message",(data: MessageType)=>{
      setMessages(prev => [...prev, data]);
    });

    return ()=>{
      socket.disconnect();
    }
  },[groupId, socket]);

  const handleClick = ()=>{
    const message = {
      id: uuidv4(),
      content: "Test message",
      sender_name: "Vraj",
      group_id: groupId,
      created_at: new Date().toISOString()
    };
    socket.emit("message", message);
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Group Members ({users.length})</h2>
        <div className="flex gap-2 mt-2">
          {users.map(user => (
            <span key={user.id} className="px-2 py-1 bg-gray-100 rounded">{user.name}</span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Messages</h2>
        <div className="space-y-2">
          {messages.map(message => (
            <div key={message.id} className="p-2 bg-gray-50 rounded">
              <div className="font-bold">{message.sender_name}</div>
              <div>{message.content}</div>
              <div className="text-xs text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button onClick={handleClick}>Send Test Message</Button>
    </div>
  )
}