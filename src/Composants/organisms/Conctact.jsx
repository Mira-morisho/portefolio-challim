import React from "react";
import "../../styles/Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";

export default function Conctact() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().max(50).required("merci d avoir entrer votre nom"),
      email: yup
        .string()
        .email("merce d entrer votre adress mail")
        .max(255)
        .required("merci d entrer votre adress mail"),
      message: yup.string().required("merci de nous avoir laisser un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    alert("merci d'avoir rempli notre formulaire");
  };

  return (
    <div className="contact">
      <div className="formulaire">
        <h1 className="titrecontact">
          I am not hard to find, let's design something truly spectacular!
        </h1>

        <div className="iconecontact">
          <AiOutlineMail
            onClick={() => navigate("https://web.facebook.com/?_rdc=1&_rdr")}
          />
          <AiOutlineFacebook
            onClick={() => navigate("https://mail.google.com/mail/u/0/#inbox")}
          />
          <AiOutlineLinkedin
            onClick={() => navigate("https://web.facebook.com/?_rdc=1&_rdr")}
          />
          <AiOutlineTwitter
            onClick={() => navigate("https://web.facebook.com/?_rdc=1&_rdr")}
          />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input type="text" placeholder="Full Name" {...register("name")} />
            <input type="email" placeholder="Email" {...register("email")} />
            <textarea
              type="text"
              placeholder="Hi Mira, I have an idea which needs your expertise......"
              {...register("message")}
            ></textarea>
          </div>
          <button type="submit" className="butoncontact">
            SUBMIT
          </button>
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
