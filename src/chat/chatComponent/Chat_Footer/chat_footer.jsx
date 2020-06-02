import React, { useState} from "react";
import send from "../../assets/image/icon_enviar_ativo.png";
import "./chat_footer.css";

export default function ChatFooter ({sendMsg}) {
  const [message, setMessage] = useState("");

  const checkMsg = e => {
    setMessage(e.target.value)
  }
  
  const cleanInput = () => {
    setMessage(' ');
  }

  const handleClick = () => {
      if(message){
        sendMsg( message)
        cleanInput()
      } 
  }

  return(
    <footer className="container__sendMessage">
          <div className="container__sendMessage--div">
            <textarea
              name="textarea env"
              id="send_msg"
              placeholder="Faça a sua Pergunta"
              className="container__sendMessage--input"
              value={message}
              onChange={checkMsg}
            ></textarea>
          </div>
          <div className="container__sendMessage--div">
            <button className="container__sendMessage--btn"  onClick={handleClick}>
              <img src={send} alt="Botão enviar mensagem" />
            </button>
          </div>
        </footer>
        
  )
}

