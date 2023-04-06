import React from "react";
import "../../styles/Client.css";
import { AiOutlineClose } from "react-icons/ai";

export default function TitreClient() {
  return (
    <div className="titreclient">
      <div className="myclient">
        <h1>
          {" "}
          MY <span>CLIENTS </span>
        </h1>
      </div>
      <div className="iconclient">
        <AiOutlineClose />
      </div>
      <div>
        <AiOutlineClose />
      </div>
    </div>
  );
}
