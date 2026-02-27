import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:7200"; // change later for production

export const socket = io(SOCKET_URL, {
  autoConnect: false,
});