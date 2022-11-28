import React from "react";
import "./button.css";
export default function Button({ onClick, children }) {
  return (
    <div>
      <button className="anon-duck" type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
