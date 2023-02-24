import React from "react";
import "../../styles/Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Buttonnavbar() {
  return (
    <div>
      <button type="submit" className="mail">
        <a href="mailto:challim@kinshasadigital.com?subject=feedback">
          challim@kinshadadigital.com
        </a>
      </button>
    </div>
  );
}
