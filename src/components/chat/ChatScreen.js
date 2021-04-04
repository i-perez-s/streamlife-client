import React from "react";
import { ComentChat } from "./ComentChat";

export const ChatScreen = () => {
  const comments = [
    {
      content: "asdasd",
      type: "message",
      user: {
        name: "asdasda",
        photoUrl:
          "https://iteragrow.com/wp-content/uploads/2018/04/buyer-persona-e1545248524290.jpg",
      },
    },
  ];

  return (
    <ul className="chat">
      {comments.map((comment) => (
        <ComentChat
          {...comment}
          key={comment.user.name + new Date().getMilliseconds}
        />
      ))}
    </ul>
  );
};
