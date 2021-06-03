import React from 'react';

import style from './Button.module.css';

export default function Button({ click, action, type, children }) {
  return (
    <button
      type={type}
      onClick={() => click(action)}
      className={`${style.button} ${
        action === 'submit' ? style.continue : style.cancel
      }`}
    >
      {children}
    </button>
  );
}
