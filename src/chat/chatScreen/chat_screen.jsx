import React, { useState, useEffect, useRef } from "react";

import request from "../../services/chatEva";
import send from "../assets/image/icon_enviar_ativo.png";
import "./chatScreen.css";
import ChatHeader from "../chatComponent/Chat_Header/chat_header";
import ChatFooter from "../chatComponent/Chat_Footer/chat_footer";
import ChatTextMila from "../chatComponent/Chat_text/chat_text";

export default function ChatScreen() {
  const [close, setClose] = useState(true);
  const [data, setData] = useState([]);
  const [msg_list, setMsg_list] = useState([]);
  const [sessionCode, setSessionCode] = useState();
  const [userInteraction, setUserInteraction] = useState();
  const [value, setValue] = useState("oi");

  useEffect(() => {
    request(value).then((response) => {
      const text = response.answers[0].text;
      const btn = response.answers[0].options;
      let result = response.answers[0];
      setData([...data, result]);
      concatMsg(text, "Mila", btn, "sim");
    });
  }, [value]);

  const concatMsg = (msg, origin, btn, icon) => {
    let obj_text = { text: msg, origin: origin, buttons: btn, icon: icon };
    setMsg_list([...msg_list, obj_text]);
  };

  const enviaMsg = (msg) => {
    setValue(msg);
    concatMsg(msg, "user", "", "");
  };

  const sendIntentBtn = (text, msg) => {
    setValue(msg);
    concatMsg(text, "user", "");
  };

  return (
    <section className="container">
      <section className="container__bodyChat">
        <ChatHeader setClose={setClose} close={close}/>
        {close && (
          <> 
            <ChatTextMila data={msg_list} sendIntent={sendIntentBtn} />
            <ChatFooter sendMsg={enviaMsg} />
          </>
        )}
      </section>     
    </section>
  );
}
