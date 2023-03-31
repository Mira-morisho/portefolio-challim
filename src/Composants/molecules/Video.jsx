import React from "react";
import ReactPlayer from "react-player";
import "../../styles/Video.css";

const internalSource = "videos/videobacgrand.mp4";

export default function Video() {
  const videoEnded = () => {
    alert("la video est terminé");
  };
  return (
    <div className="bloc">
      {/* <ReactPlayer
        url={internalSource}
        width="100%"
        height="100%"
        controls={true}
        playing
        muted
        className="video"
        onEnded={videoEnded}
      /> */}
      <video controls width="100%" className="video">
        <source src="video/videobacgrand.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
