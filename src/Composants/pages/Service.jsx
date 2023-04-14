import React from "react";
import "../../styles/Service.css";
import { AiOutlineClose } from "react-icons/ai";

export default function () {
  return (
    <div className="service">
      <div className="portefolio1">
        <div className="boutonvide"></div>
        <div className="boutonprofil">
          <div className="boutonall">
            <div className="allcasestude"> SERVICED INDUSTRIES</div>
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className="mes-services">
        <div className="serviceinstuit">
          <div className="titreservice"> SERVICED INDUSTRIES</div>
          <p>
            I combine human empathy, research and intelligent data to provide
            the highest level of satisfaction for organizations and their users.
          </p>
        </div>
        <div className="autres-services">
          <div className="Servicep1">
            <div className="titicon">
              <h1>Fintech</h1>
              <AiOutlineClose className="icon" />
            </div>
            <div className="ecomerce">
              <p className="paragrpheservice1">
                I design smart, in-demand financial solutions, delighting the
                client’s audience with innovations in the finance sector.
                Putting end-users at the forefront and creating a high-end
                experience, I improve business metrics with designs.
              </p>
              <div className="ecormercicon">
                <h1> E-comerce</h1>
                <AiOutlineClose className="icon" />
              </div>
            </div>
            <div className="ecomerce">
              <p className="paragrpheservice1">
                I design smart, in-demand financial solutions, delighting the
                client’s audience with innovations in the finance sector.
                Putting end-users at the forefront and creating a high-end
                experience, I improve business metrics with designs.
              </p>
            </div>
          </div>
          <div className="servicep2">
            <div className="blockchain">
              <h1>Blockchain</h1>
              <AiOutlineClose className="icon" />
            </div>
            <div className="ecomerce">
              <p className="paragrpheservice1">
                I design smart, in-demand financial solutions, delighting the
                client’s audience with innovations in the finance sector.
                Putting end-users at the forefront and creating a high-end
                experience, I improve business metrics with designs.
              </p>
              <div className="blockchain">
                <h1>Logistics</h1>
                <AiOutlineClose className="icon" />
              </div>
            </div>
            <div className="ecomerce">
              <p className="paragrpheservice1">
                I design smart, in-demand financial solutions, delighting the
                client’s audience with innovations in the finance sector.
                Putting end-users at the forefront and creating a high-end
                experience, I improve business metrics with designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
