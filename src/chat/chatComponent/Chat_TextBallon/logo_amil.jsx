import React from "react";

import "./textBallon.css";

import logo_amil from "../../assets/image/amil-icon.png";


export default function Logo_amil() {
  return (
    <>
      <span className="span__icon">
        <img src={logo_amil} className="span__icon_amil" />
      </span>
    </>
  );
}
