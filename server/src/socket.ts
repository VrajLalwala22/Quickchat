import { Server, Socket } from "socket.io";
import { io } from "./index.js";

interface CustomSocket extends Socket{
        room?: string;
}

export function setupSocket(io:Server){

    io.use((socket:CustomSocket,next)=>{
        const room = socket.handshake.auth.room;
        if(!room){
            return next(new Error("Room is required"));
        }
        socket.room=room;
        next();
    })





    io.on("connection",(socket:CustomSocket)=>{
        socket.join(socket.room);
        
        
        
        socket.on("message",(data)=>{
            console.log("Server side Message",data);
            io.to(socket.room).emit("message",data);
        })
        
        
        socket.on("disconnect",()=>{
            console.log("A user disconnected",socket.id)
        })
 
    })
}