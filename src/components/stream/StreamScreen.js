import React from "react";
import { ChatScreen } from "../chat/ChatScreen";
import { VideoPlayer } from "./VideoPlayer";

export const StreamScreen = () => {
  return (
    <div className="row">
      <div className="col-md-8 col-sm-12">
        <VideoPlayer />
      </div>
      <div className="col-md-4 col-sm-12">
        <ChatScreen />
      </div>
    </div>
  );
};
