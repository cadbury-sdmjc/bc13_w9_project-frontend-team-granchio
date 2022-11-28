import React from "react";
import "./button.css";
export default function Button({ onClick, children }) {
  return (
    <button className="duck-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
