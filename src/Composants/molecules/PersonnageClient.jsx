import React, { useState } from "react";
import "../../styles/Client.css";

export default function PersonnageClient({ Parentclients }) {
  const [numclient, setNumClient] = useState(0);
  return (
    <div>
      PersonnageClient
      <span
        onClick={() => {
          if (numclient > 0) {
            setNumClient(numclient - 1);
          }
        }}
      >
        Precedant{" "}
      </span>
      <span
        onClick={() => {
          if (numclient <= 1) {
            setNumClient(numclient + 1);
          }
        }}
      >
        Suivant{" "}
      </span>
      <p>{Parentclients[numclient].name}</p>
      <p>{Parentclients[numclient].description}</p>
      <img width={240} height={300} src={Parentclients[numclient].photo} />
    </div>
  );
}
