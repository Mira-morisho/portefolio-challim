import React from "react";
// import "../Style/Acceuil.css";
import Name from "../molecules/Name";
import Video from "../atoms/Video";
import Presentation from "../molecules/Presentation";

export default function Acceuil() {
  return (
    <>
      <div>
        <Name />
        <Video />
      </div>
      <Presentation />
    </>
  );
}
