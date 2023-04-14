import React from "react";
import "../../styles/Profil.css";

export default function Profil() {
  return (
    <div className="profilperso">
      <div className="profilvide"></div>
      <div className=" imageprofil">
        <img
          src="profil-challim.png"
          width="261"
          height="261"
          className=" imgpresentation"
        />
      </div>
    </div>
  );
}
