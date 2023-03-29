import React from "react";
import "../../styles/Portefolio.css";
import { AiOutlineClose } from "react-icons/ai";

export default function MyPortefolio() {
  return (
    <div className="contenairportefolio">
      <div className="portefolio1">
        <div className="boutonvide"></div>
        <div className="boutonprofil">
          <button className="bouton">ALL CASE STUDE</button>
        </div>
      </div>
      <div className="portefolio2">
        <div className="portefolio2pricipaldiv">
          <div className="altridicone">
            <h1 className="altrid">ALtrid</h1>
            <div className="iconeportefolio">
              <AiOutlineClose />
            </div>
          </div>
          <p className="paragraportefolio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod
            lacinia turpis ac blandit. Suspendisse et ligula orci. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nam pellentesque
            est sed ultricies tempor. Donec quis ex volutpat, blandit sem sed,
            dictum est. Praesent faucibus justo at est sollicitudin, non
            consequat sapien maximus. Vestibulum posuere mollis leo, non
            ullamcorper eros commodo quis. Inter
          </p>
          <div className="mobilappli">MOBIL APPLICATION</div>
        </div>
      </div>
      <div className="portefolio3">
        <div className="portefolio3contenair">
          <img
            width={400}
            height={372}
            src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
            className=" imgportefolio"
          />
        </div>
      </div>
    </div>
  );
}
