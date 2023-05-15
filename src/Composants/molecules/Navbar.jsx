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
            <a href="#acceuil">ACCEUIL</a>
          </li>
          <li>
            <a href="#about">A PROPOS</a>
          </li>

          <li>
            <a href="#portefolio">PORTEFOLIO</a>
          </li>
          <li>
            <a href="#service">SERVICE</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
