import React from "react";
import "../../styles/Client.css";
import { AiOutlineClose } from "react-icons/ai";

export default function TitreClient() {
  return (
    <div className="titreclient">
      <div className="myclient">
        <h1>
          MY
          <span> CLIENTS</span>
        </h1>
      </div>
      <div className="iconeclient">
        <div className="icone1">
          <AiOutlineClose />
        </div>
        <AiOutlineClose className="icone2" />
      </div>
    </div>

    // <div>
    //   PersonnageClient
    //   <span
    //     onClick={() => {
    //       if (numclient > 0) {
    //         setNumClient(numclient - 1);
    //       }
    //     }}
    //   >
    //     Precedant{" "}
    //   </span>
    //   <span
    //     onClick={() => {
    //       if (numclient <= 1) {
    //         setNumClient(numclient + 1);
    //       }
    //     }}
    //   >
    //     Suivant{" "}
    //   </span>
    //   <p>{Parentclients[numclient].name}</p>
    //   <p>{Parentclients[numclient].description}</p>
    //   <img width={240} height={300} src={Parentclients[numclient].photo} />
    // </div>
  );
}
