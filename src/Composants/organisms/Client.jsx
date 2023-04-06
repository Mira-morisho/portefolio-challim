import React from "react";
import TitreClient from "../molecules/TitreClient";
import PersonnageClient from "../molecules/PersonnageClient";
import "../../styles/Client.css";

export default function Client() {
  return (
    <div className="client">
      <TitreClient />
      <PersonnageClient />
    </div>
  );
}
