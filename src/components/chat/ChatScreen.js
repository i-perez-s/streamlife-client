import React, { useEffect } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { useForm } from "../../hooks/useForm";
import { ComentChat } from "./ComentChat";
const url = "http://localhost:3001";

export const ChatScreen = () => {
  const { sid } = useParams();
  const socket = io(url, {
    extraHeaders: {
      token: localStorage.getItem("token"),
      idstream: sid,
    },
  });
  const comments = [
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photo:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photo:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photo:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photo:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photo:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
  ];
  const [{ message }, handleInputChange] = useForm({
    message: "",
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
      text: message,
      chat: sid,
    });
  };

  const sendEmote = () => {
    socket.emit("send-emote", {
      text: "6047cbc967c5f937f0341be2",
      chat: "a",
    });
  };

  return (
    <div className="chatBox">
      <ul className="chat">
        {comments.map((comment) => (
          <ComentChat
            {...comment}
            key={comment.user.name + new Date().getMilliseconds}
          />
        ))}
      </ul>
      <div className="chatInputBox">
        <input
          type="text"
          className="chatInput form-control"
          placeholder="Type your message for the chat"
          name="message"
          onChange={handleInputChange}
          value={message}
        />
        <div className="sendButton" onClick={sendMessage}>
          <i className="fas fa-location-arrow"></i>
        </div>
      </div>
    </div>
  );
};
