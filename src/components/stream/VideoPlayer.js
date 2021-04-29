import React from "react";
import { ReactFlvPlayer } from "react-flv-player";
import { useParams } from "react-router";

export const VideoPlayer = () => {
  const { sid } = useParams();
  const url = `http://localhost:8000/live/${sid}.flv`;
  return (
    <div className="c-video">
      <ReactFlvPlayer
        className="video"
        url={url}
        // heigh="800px"
        // width="800px"
        isMuted={false}
      />
    </div>
  );
};
