import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import ChatBtn from "../Chat_Btn/chat_btn";

import "./textBallon.css";

export default function textBallon__Mila(data, origin) {
  const classText = (origin) => {
    const classText__Mila = "container__msg--text";
    const classText__User = "container__msg--textUser  msg--user";

    if (origin === "Mila") {
      return classText__Mila;
    } else {
      return classText__User;
    }
  };

  return (
    <>
      <div className={classText(origin)}>
        <span>{parse(`${data}`)}</span>
      </div>
    </>
  );
}
