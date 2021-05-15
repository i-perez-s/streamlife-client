import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { useForm } from "../../hooks/useForm";
import { ComentChat } from "./ComentChat";
const url = "http://localhost:3001";

export const ChatScreen = () => {
  const { sid } = useParams();
  const [comments, setComments] = useState([]);
  const socket = io(url, {
    extraHeaders: {
      token: localStorage.getItem("token"),
      idstream: sid,
    },
  });

  const [{ message }, handleInputChange] = useForm({
    message: "",
  });

  useEffect(() => {
    socket.on("chatMessage", (comment) => {
      console.log(comment);
      console.log(...comments);
      setComments([...comments, comment]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const hello = () => {
    socket.emit("sendChatMessage", { content: message, chat: sid });
  };

  return (
    <div className="chatBox">
      <ul className="chat">
        {comments.map((comment) => (
          <ComentChat {...comment} key={comment.user._id} />
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
        <div className="sendButton" onClick={hello}>
          <i className="fas fa-location-arrow"></i>
        </div>
      </div>
    </div>
  );
};
