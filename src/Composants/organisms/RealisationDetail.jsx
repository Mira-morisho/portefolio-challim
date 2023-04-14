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
              {/* <li>
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
              </li> */}
            </ul>
            <AiOutlineClose />
          </div>
          <div>
            ------------------------------------------------------------------
          </div>
        </div>
        <div className="realistiondetail">
          <img
            width={320}
            height={451}
            src="https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png"
            alt=""
          />
          <div className="realisationtexte">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod lacinia turpis ac blandit. Suspendisse et ligula orci.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
              pellentesque est sed ultricies tempor. Donec quis ex
            </p>
            <div className="realisationmobilap">
              <div>MOBILE APLICATION</div>
              <div>100+ SCREENS</div>
              <div>MOBILE APLICATION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
