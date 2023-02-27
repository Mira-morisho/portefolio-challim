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
      <div className="header">
        <Logo />
        <div className={drawMenu ? "navigation" : " navigation hiddenMenu"}>
          <Navbar />
        </div>
        <span className="hamburger">
          <i class="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
        </span>
        <Buttonnavbar />
      </div>
    </>
  );
}
