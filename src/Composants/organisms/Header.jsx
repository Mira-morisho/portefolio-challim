import React from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import Buttonnavbar from "../atoms/Buttonnavbar";
import "../../styles/Header.css";

export default function () {
  return (
    <>
      <div className="header">
        <Logo />
        <div className="navigation">
          <Navbar />
          <Buttonnavbar />
        </div>
      </div>
    </>
  );
}
