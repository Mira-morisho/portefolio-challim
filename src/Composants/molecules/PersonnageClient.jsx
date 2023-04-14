import React, { useState } from "react";
import "../../styles/Client.css";
import { AiOutlineClose } from "react-icons/ai";

export default function PersonnageClient({ Parentclients }) {
  const [numclient, setNumClient] = useState(0);
  return (
    <div className="client">
      <div className="titreclient">
        <div className="myclient">
          <h1>
            MY
            <span> CLIENTS</span>
          </h1>
        </div>
        <div className="iconeclient">
          <div className="icone1">
            <AiOutlineClose
              onClick={() => {
                if (numclient > 0) {
                  setNumClient(numclient - 1);
                }
              }}
            />
          </div>
          <AiOutlineClose
            className="icone2"
            onClick={() => {
              if (numclient <= 1) {
                setNumClient(numclient + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="personnageclient">
        <div className="clientel">
          <div className="boutonvide"></div>
          <div className="boutonprofil">
            <div className="boutonall">
              <div className="allcasestude">DEVENIR CLIENT</div>
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="presentationclient">
          <p className="paragrapheclient">
            {Parentclients[numclient].description}
          </p>
          <div className="idclient">
            <div className="nomclient">{Parentclients[numclient].name}</div>
            <img
              className="profclient"
              width={150}
              height={150}
              src={Parentclients[numclient].photo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
