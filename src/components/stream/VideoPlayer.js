import React from "react";
import { ReactFlvPlayer } from "react-flv-player";

export const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="c-video">
        <ReactFlvPlayer
          className="video"
          url="http://localhost:8000/live/STREAM_NAME.flv"
          heigh="800px"
          width="800px"
          isMuted={false}
        />
      </div>
    </div>
  );
};
