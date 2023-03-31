import React from "react";
import "../../styles/PortefolioDetail.css";
import { AiOutlineClose } from "react-icons/ai";

export default function RealisationDetail() {
  return (
    <div className="realisation">
      <div className="realisationtitre">
        <div className="realisaticontireicone">
          <h1>What I do</h1>
          <AiOutlineClose />
        </div>
        <p>
          I create engaging user experience design for brands and startups by
          balancing the business needs and the user’s needs.
        </p>
      </div>
      <div className="realisationprojet">
        <div className="divrealisationprojet">
          <div className="titrerealisationprojet">
            <h1>Astrid</h1>
            <ul className="listetitre">
              <li>
                <a href="Brading"></a>
              </li>
              <li>
                <a href="Brading"></a>
              </li>
              <li>
                <a href="Brading"></a>
              </li>
              <li>
                <a href="Brading"></a>
              </li>
            </ul>
            <AiOutlineClose />
          </div>
          <div>
            --------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
