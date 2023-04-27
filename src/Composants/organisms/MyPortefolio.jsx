import React from "react";
import "../../styles/Portefolio.css";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function MyPortefolio() {
  const navigate = useNavigate();

  return (
    <div className="contenairportefolio">
      <div className="portefolio1">
        <div className="boutonvide"></div>
        <div className="boutonprofil">
          <div className="boutonall">
            <div className="allcasestude">CASE STUDE</div>
            <AiOutlineClose onClick={() => navigate("/deuxieme")} />
          </div>
        </div>
      </div>
      <div className="portefolio2">
        <div className="p1">
          <div className="portefolio2pricipaldiv">
            <div className="altridicone">
              <h1 className="altrid">ALtrid</h1>
              <div className="iconeportefolio">
                <AiOutlineClose onClick={() => navigate("/troisieme")} />
              </div>
            </div>
            <p className="paragraportefolio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod lacinia turpis ac blandit. Suspendisse et ligula orci.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
              pellentesque est sed ultricies tempor. Donec quis ex volutpat,
              blandit sem sed, dictum est. Praesent faucibus justo at est
              sollicitudin, non consequat sapien maximus. Vestibulum posuere
              mollis leo, non ullamcorper eros commodo quis. Inter
            </p>
            <div className="mobilappli">MOBIL APPLICATION</div>
          </div>
          <div className="p2">
            <div className="portefolio3contenair">
              <img
                width={320}
                height={451}
                src="https://www.kemiadeleke.com/static/media/proj-2.49a0ff385bfefb743aa4.png"
                className=" imgportefolio"
              />
            </div>
          </div>
        </div>
        <div className="p3">
          {" "}
          <div className="portefolio2pricipaldiv">
            <div className="altridicone">
              <h1 className="altrid">ALtrid</h1>
              <div className="iconeportefolio">
                <AiOutlineClose onClick={() => navigate("/troisieme")} />
              </div>
            </div>
            <p className="paragraportefolio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod lacinia turpis ac blandit. Suspendisse et ligula orci.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
              pellentesque est sed ultricies tempor. Donec quis ex volutpat,
              blandit sem sed, dictum est. Praesent faucibus justo at est
              sollicitudin, non consequat sapien maximus. Vestibulum posuere
              mollis leo, non ullamcorper eros commodo quis. Inter
            </p>
            <div className="mobilappli">MOBIL APPLICATION</div>
          </div>
        </div>
      </div>
      <div className="portefolio3">
        <div className="portefolio3contenair1">
          <img
            width={320}
            height={451}
            src="https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png"
            className=" imgportefolio"
          />
        </div>
        <div className="portefolio3contenair2">
          <div className="portefolio2pricipaldiv">
            <div className="altridicone">
              <h1 className="altrid">ALtrid</h1>
              <div className="iconeportefolio">
                <AiOutlineClose onClick={() => navigate("/troisieme")} />
              </div>
            </div>
            <p className="paragraportefolio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod lacinia turpis ac blandit. Suspendisse et ligula orci.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
              pellentesque est sed ultricies tempor. Donec quis ex volutpat,
              blandit sem sed, dictum est. Praesent faucibus justo at est
              sollicitudin, non consequat sapien maximus. Vestibulum posuere
              mollis leo, non ullamcorper eros commodo quis. Inter
            </p>
            <div className="mobilappli">MOBIL APPLICATION</div>
          </div>
        </div>
        <div className="portefolio3contenair1">
          <img
            width={320}
            height={451}
            src="https://www.kemiadeleke.com/static/media/proj-1.37196af1fdc6dda06072.png"
            className=" imgportefolio"
          />
        </div>
      </div>
    </div>
  );
}
