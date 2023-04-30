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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => navigate("/deuxieme")}
            >
              <path
                d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="portefolio2">
        <div className="p1">
          <div className="portefolio2pricipaldiv">
            <div className="altridicone">
              <h1 className="altrid">ALtrid</h1>
              <div className="iconeportefolio">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => navigate("/troisieme")}
                >
                  <path
                    d="M21.3386 12.552L9.86263 24.028L7.97729 22.1427L19.452 10.6667H9.33863V8H24.0053V22.6667H21.3386V12.552Z"
                    fill="#010101"
                  ></path>
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => navigate("/troisieme")}
                >
                  <path
                    d="M21.3386 12.552L9.86263 24.028L7.97729 22.1427L19.452 10.6667H9.33863V8H24.0053V22.6667H21.3386V12.552Z"
                    fill="#010101"
                  ></path>
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => navigate("/troisieme")}
                >
                  <path
                    d="M21.3386 12.552L9.86263 24.028L7.97729 22.1427L19.452 10.6667H9.33863V8H24.0053V22.6667H21.3386V12.552Z"
                    fill="#010101"
                  ></path>
                </svg>
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
