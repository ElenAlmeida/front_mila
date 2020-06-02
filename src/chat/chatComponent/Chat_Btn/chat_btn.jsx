import React, { useState, useEffect } from "react";

import "./chat_btn.css";

export default function ChatBtn({ dataBtn, func_sendIntent }) {
  return (
    <>
      {dataBtn.map((btn, index) => (
        <button
          key={index}
          className="container__msg--btn"
          onClick={() => func_sendIntent(btn.title, btn.text)}
        >
          {btn.title}
        </button>
      ))}
    </>
  );
}
