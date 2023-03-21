import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import Buttonnavbar from "../atoms/Buttonnavbar";
import "../../styles/Header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
            <Buttonnavbar />
          </div>
          <div className="div-hambuger">
            <span className="hamburger" onClick={() => toggleMenu()}>
              {drawMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
