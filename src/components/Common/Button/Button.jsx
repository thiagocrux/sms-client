import React from 'react';

import style from './Button.module.css';

export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={() => props.click(props.action)}
      className={`${style.button} ${props.action === 'submit' ? style.continue : style.cancel}`}
    >
      {props.children}
    </button>
  );
}
