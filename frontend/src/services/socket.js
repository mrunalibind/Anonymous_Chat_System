import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:7000"; // change later for production

export const socket = io(SOCKET_URL, {
  autoConnect: false,
});