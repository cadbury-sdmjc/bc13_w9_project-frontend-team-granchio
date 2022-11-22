import React from 'react';

export default function Button({onClick}) {

  return (
    <div>
      <button type='button' onClick={onClick}>Anon Duck</button>
    </div>
  );
}
