import React from 'react';

import style from './Button.module.css';

export default function Button(props) {
  // FIXME: Change to the css module aproach.
  const conditionalStyling = {
    color: '#FFFFFF',
    backgroundColor: props.action === 'submit' ? '#41436A' : '#984063',
  };

  return (
    <button
      type={props.type}
      onClick={() => props.click(props.action)}
      style={conditionalStyling}
      className={style.button}
    >
      {props.children}
    </button>
  );
}
