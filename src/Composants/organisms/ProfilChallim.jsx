import React from "react";
import Profil from "../atoms/Profil";
import Presentation from "../molecules/Presentation";
import "../../styles/Profil.css";

export default function ProfilChallim() {
  return (
    <div className="profil-contenair">
      <Profil />
      <Presentation />
    </div>
  );
}
