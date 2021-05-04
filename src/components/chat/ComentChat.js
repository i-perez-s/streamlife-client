import React from "react";

export const ComentChat = ({ content, type, user }) => {
  console.log(content, type, user);
  return (
    <li className="comment">
      <img src={user.photo} className="userChatPhoto" alt="userPhoto" />
      <span className="userName"> {user.name}</span>: {content}
    </li>
  );
};
