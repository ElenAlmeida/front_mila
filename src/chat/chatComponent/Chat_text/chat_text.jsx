import React, { useState, useEffect, useRef } from "react";

import "./chat_text.css";
import ChatBtn from "../Chat_Btn/chat_btn";
import TextBallon__Mila from "../Chat_TextBallon/textBallon__Mila";

export default function ChatTextMila({ data, sendIntent }) {

  const textRef = useRef(null);

  const scrollToBottom = () => {
    textRef.current.scrollIntoView({behavior: "smooth"})
  }

  useEffect(scrollToBottom, [data]);

  return (
    <>
      <section className="container__msg">
        <div className="container__msg--list ">
          {data.map((e, i) => (
            <div key={i} className="container__msg--answer">
                <TextBallon__Mila  origin={e.origin}  text={e.text} icon={e.icon} />
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
