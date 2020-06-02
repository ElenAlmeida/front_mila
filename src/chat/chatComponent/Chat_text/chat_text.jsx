import React, { useState, useEffect, useRef } from "react";
import logo_amil from "../../assets/image/amil-icon.png";

import parse from "html-react-parser";

import "./chat_text.css";
import ChatBtn from "../Chat_Btn/chat_btn";

export default function ChatTextMila({ data, sendIntent }) {

  const textRef = useRef(null);

  const scrollToBottom = () => {
    textRef.current.scrollIntoView({behavior: "smooth"})
  }

  useEffect(scrollToBottom, [data]);

  const classText = (origin) => {
  const classText__Mila = "container__msg--text";
   const classText__User = "container__msg--textUser  msg--user";
    
      if (origin === "Mila") {
        return classText__Mila;
      }else{
        return classText__User;
      }  
  };

  return (
    <>
      <section className="container__msg">
        <div className="container__msg--list ">
          {data.map((e, i) => (
            <div key={i} className="container__msg--answer">
              <div className="container__msg--text-icon">
                {e.icon && (
                  <span className="span__icon">
                    <img src={logo_amil} className="span__icon_amil" />
                  </span>
                )}
                <div className={classText(e.origin)}>
                  <span>{parse(`${e.text}`)}</span>
                </div>
              </div>
              <div className="container__btn">
                {e.buttons && (
                  <ChatBtn dataBtn={e.buttons} func_sendIntent={sendIntent} />
                )}
              </div>
            </div>
          ))}
          <div  ref={textRef}/>
        </div>
        
      </section>
    </>
  );
}
