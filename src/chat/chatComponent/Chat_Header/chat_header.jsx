import React from "react";
import logoamil from "../../assets/image/amil.png";
import close from "../../assets/image/icon_close.png";
import "./chat_header.css";

export default function ChatHeader() {
  return (
    <header className="container__navbar">
      <nav className="container__navbar-nav">
        <div className="container__navbar-div">
          <span>
            <img src={logoamil} alt="Logo amil" className="logo__nav" />
          </span>
          <span>
            <p className="container__navbar-title">| Atendimento</p>
          </span>
        </div>
        <div className="container__navbar-div  container__navbar-close">
          <span>
            <img src={close} alt="Botão fechar chat" />
          </span>
        </div>
      </nav>
    </header>
  );
}
