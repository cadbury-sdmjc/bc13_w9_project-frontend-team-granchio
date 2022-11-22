import React from 'react';
import "./button.css"
export default function Button({onClick}) {

  return (
    <div>
      <button className="anon-duck" type='button' onClick={onClick}>Anon Duck</button>
    </div>
  );
}
