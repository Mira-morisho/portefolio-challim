import React from "react";
import ReactPlayer from "react-player";

const internalSource = "videos/videobacgrand.mp4";

export default function Video() {
  return (
    <div className="bloc">
      <ReactPlayer
        url={internalSource}
        width="100%"
        height="100%"
        controls={true}
        className="video"
      />
    </div>
  );
}
