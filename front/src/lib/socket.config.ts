import { io, Socket } from "socket.io-client";

let socket: Socket;

export const getSocket = (): Socket => {
    if (!socket) {
        socket = io("http://localhost:8002", {
            autoConnect: false,
            withCredentials: true,
            transports: ['websocket', 'polling']
        });

        // Add connection event handlers
        socket.on("connect", () => {
            console.log("Connected to WebSocket server");
        });

        socket.on("connect_error", (error) => {
            console.error("WebSocket connection error:", error);
        });
    }
    return socket;
}