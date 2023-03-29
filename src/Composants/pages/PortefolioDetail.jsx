import React from "react";
import Header from "../organisms/Header";
import "../../styles/PortefolioDetail.css";
import RealisationDetail from "../organisms/RealisationDetail";
import PortefolioDetailtitra from "../atoms/PortefolioDetailtitra";

export default function PortefolioDetail() {
  return (
    <div>
      <div className="headerportefolio">
        <Header />
      </div>
      <PortefolioDetailtitra />
      <RealisationDetail />
    </div>
  );
}
