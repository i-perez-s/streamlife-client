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
    socket.on("send-emote", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", {
      text: "6047cbc967c5f937f0341be2",
      chat: "a",
    });
  };

  const sendEmote = () => {
    socket.emit("send-emote", {
      text: "6047cbc967c5f937f0341be2",
      chat: "a",
    });
  };

  return (
    <>
      <button onClick={sendMessage}>mesage</button>{" "}
      <button onClick={sendEmote}>emote</button>
    </>
  );
};
