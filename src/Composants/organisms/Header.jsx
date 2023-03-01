import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import Buttonnavbar from "../atoms/Buttonnavbar";
import "../../styles/Header.css";

export default function () {
  const [drawMenu, setDrawMenu] = useState(false);
  const toggleMenu = () => {
    setDrawMenu(!drawMenu);
  };
  return (
    <>
      <div>
        <div className="header">
          <Logo />
          <div className={drawMenu ? "navigation" : " navigation hiddenMenu"}>
            <Navbar />
          </div>
          <span className="hamburger" onClick={() => toggleMenu()}>
            <i className="fa-solid fa-bars">☰</i>
          </span>
          <Buttonnavbar />
        </div>
        <div></div>
      </div>
    </>
  );
}
