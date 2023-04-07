import React from "react";
import "../../styles/Contact.css";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";

export default function Conctact() {
  return (
    <div className="contact">
      <div className="formulaire">
        <h1 className="titrecontact">
          I am not hard to find, let's design something truly spectacular!
        </h1>

        <div className="iconecontact">
          <AiOutlineMail />
          <AiOutlineFacebook />
          <AiOutlineLinkedin />
          <AiOutlineTwitter />
        </div>
        <form className="form">
          <div className="input">
            <input placeholder="Full Name" />
            <input placeholder="Mail" />
            <textarea placeholder="Hi Mira, I have an idea which needs your expertise......"></textarea>
          </div>
          {/* <button type="submit" className="butoncontact">
            SUBMIT
          </button> */}
          <div className="buttoncontact">
            <div className="boutonvide"></div>
            <div className="boutonprofil">
              <div className="boutonall">
                <div className="allcasestude">SUBMIT</div>
                {/* <AiOutlineClose /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="imgcontact">
        <img
          className="photocontact"
          width={645}
          height={750}
          src="https://www.kemiadeleke.com/static/media/footer-image.d4f3ab5ae9a71ccf7e5d.png"
        />
      </div>
    </div>
  );
}
