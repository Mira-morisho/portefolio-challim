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
        <div className="realistiondetail">
          <div className="imgdetail">
            <img
              width={400}
              height={372}
              src="https://media.gettyimages.com/id/184276818/fr/photo/pomme-rouge.jpg?s=2048x2048&w=gi&k=20&c=d9atw7cYEvbe3Zmko9j1MJONJjh0AFFGkIYgkMOK9oM="
              alt=""
            />
          </div>
          <div className="realisationtexte">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod lacinia turpis ac blandit. Suspendisse et ligula orci.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
              pellentesque est sed ultricies tempor. Donec quis ex
            </p>
            <div>
              <div>MOBILE APLICATION</div>
              <div>MOBILE APLICATION</div>
              <div>MOBILE APLICATION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
