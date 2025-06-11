import { Server } from "socket.io";
import { io } from "./index.js";

export function setupSocket(io:Server){
    io.on("connection",(socket)=>{
        console.log("A user connected",socket.id)
        
        
        socket.on("message",(data)=>{
            console.log("Server side Message",data);
            socket.broadcast.emit("message",data);
        })
        
        
        socket.on("disconnect",()=>{
            console.log("A user disconnected",socket.id)
        })
 
    })
}