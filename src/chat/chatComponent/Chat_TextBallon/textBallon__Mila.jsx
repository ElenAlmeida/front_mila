import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import "./textBallon.css";
import Logo_amil from "./logo_amil";

export default function TextBallon__Mila({ origin, text, icon }) {
  const classText = (origins) => {
    const classText__Mila = "container__msg--text";
    const classText__User = "container__msg--textUser  msg--user";

    if (origins === "Mila") {
      return classText__Mila;
    } else {
      return classText__User;
    }
  };

  return (
    <>
      <div className="container__msg--text-icon">
        {icon && <Logo_amil />}
        <div className={classText(origin)}>
          <span>{parse(`${text}`)}</span>
        </div>
      </div>
    </>
  );
}
