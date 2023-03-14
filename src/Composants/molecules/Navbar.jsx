import React from "react";
import "../../styles/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="#index.html">ACCEUIL</a>
          </li>
          <li>
            <a href="#serverices">SERVICE</a>
          </li>
          <li>
            <a href="#skills">COMPETANCE</a>
          </li>
          <li>
            <a href="#portefolio">PORTEFOLIO</a>
          </li>
          <li>
            <a href="#conctat">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
