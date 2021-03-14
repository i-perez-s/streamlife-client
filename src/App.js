import React, { useEffect } from "react";
import { io } from "socket.io-client";

const url = "http://localhost:3001";

export const App = () => {
  const socket = io(url, {
    extraHeaders: {
      token: localStorage.getItem("token"),
      idstream: "a",
    },
  });
  useEffect(() => {
    socket.on("send-message", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", { text: new Date(), chat: "a" });
  };

  return <button onClick={sendMessage}>click</button>;
};
