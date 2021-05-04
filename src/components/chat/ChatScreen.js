import React from "react";
import { ComentChat } from "./ComentChat";

export const ChatScreen = () => {
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
          <input type="text" className="chatInput form-control" placeholder="Type your message for the chat"/>
          <div className="sendButton">
          <i className="fas fa-location-arrow"></i>
          </div>
        </div>
      </div>
  );
};
