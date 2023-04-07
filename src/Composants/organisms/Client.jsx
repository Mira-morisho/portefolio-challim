import React from "react";
import TitreClient from "../molecules/TitreClient";
import PersonnageClient from "../molecules/PersonnageClient";
import "../../styles/Client.css";

export default function Client() {
  const clients = [
    {
      name: "MRA MORISHO",
      description:
        "Moi mira safi  design smart, in-demand financial solutions, delighting the client’s audience with innovations in the finance sector. Putting end-users at the forefront and creating a high-end experience, I improve business  Moi mira safi design smart, in-demand financial solutions, delighting the client’s audience with innovations in the finance sector. Putting end-users at the forefront and creating a high-end experience, I improve business metrics with designs.metrics with designs.",
      photo:
        "https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png",
    },
    {
      name: "   ASHA MORISHO",
      description:
        "ASHA  est un  design smart, in-demand financial solutions, delighting the client’s audience with innovations in the finance sector. Putting end-users at the forefront and creating a high-end experience, I improve business metrics with designs. safi est une dev fillstack patiskjkqjsq",
      photo:
        "https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png",
    },
    {
      name: "MICOCO ",
      description:
        "Bonjour  design smart, in-demand financial solutions, delighting the client’s audience with innovations in the finance sector. Putting end-users at the forefront and creating a high-end experience, I improve business metrics with designs. safi est une dev fillstack patiskjkqjsq",
      photo:
        "https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png",
    },
  ];
  return (
    <div>
      {/* <TitreClient /> */}
      <PersonnageClient Parentclients={clients} />
    </div>
  );
}
