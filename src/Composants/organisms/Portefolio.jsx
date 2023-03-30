import React from "react";
import Titreportefolio from "../atoms/Titreportefolio";
import MyPortefolio from "./MyPortefolio";
import "../../styles/Portefolio.css";

export default function Portefolio() {
  return (
    <div className="portefolio">
      <Titreportefolio />
      <MyPortefolio />
    </div>
  );
}
