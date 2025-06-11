"use client"
import { getSocket } from '@/lib/socket.config';
import React, { useEffect, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';

export default function ChatBase() {
  
  let socket = useMemo(()=>{
    const socket = getSocket();

    return socket.connect();
  }, []);

  useEffect(()=>{
    
    socket.on("message",(data:any)=>{
        console.log("Message received",data);
    })


    return ()=>{
        socket.disconnect();
    }
  },[])

  const handleClick = ()=>{
    socket.emit("message",{name:"Vraj",id:uuidv4()})
  }
    return (
    <div>
        <Button onClick={handleClick}>Send Message</Button>
    </div>
  )
}