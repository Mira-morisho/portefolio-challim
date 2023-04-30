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
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                if (numclient > 0) {
                  setNumClient(numclient - 1);
                }
              }}
            >
              <path
                d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icone2"
            onClick={() => {
              if (numclient <= 1) {
                setNumClient(numclient + 1);
              }
            }}
          >
            <path
              d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
      <div className="personnageclient">
        <div className="clientel    ">
          <div className="boutonvide"></div>
          <div className="boutonprofil">
            <div className="boutonall">
              <div className="allcasestude">DEVENIR CLIENT</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z"
                  fill="white"
                ></path>
              </svg>
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
