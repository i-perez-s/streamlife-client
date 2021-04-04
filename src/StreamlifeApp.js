import React from "react";
import { Provider } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

// const url = "http://localhost:3001";

export const StreamlifeApp = () => {
  /*   const socket = io(url, {
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
  }, [socket]);

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
  }; */

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
