import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { useForm } from "../../hooks/useForm";
import { ComentChat } from "./ComentChat";
import {useSelector} from 'react-redux'
const url = "http://localhost:3001";

export const ChatScreen = () => {
  const { sid } = useParams();
  const {user} = useSelector(state => state.auth)
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
      setComments([...comments, comment]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault()
    const comment = {content: message, user: {
      _id: user._id,
      name: user.username,
      photo: user.photo
    }}
    setComments([...comments, comment]);
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
        <form onSubmit={sendMessage}>
        <input
          type="text"
          className="chatInput form-control"
          placeholder="Type your message for the chat"
          name="message"
          onChange={handleInputChange}
          value={message}
          autoComplete='off'
        />
        <button className="sendButton" type="submit">
          <i className="fas fa-location-arrow"></i>
        </button>
        </form>
      </div>
    </div>
  );
};
