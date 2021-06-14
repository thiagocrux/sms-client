import React from 'react';

import style from './Button.module.css';

export default function Button({ click, action, type, children }) {
  return (
    <button
      type={type}
      onClick={click}
      className={`${style.button} ${
        action === 'submit'
          ? style.submit
          : action === 'cancel'
          ? style.cancel
          : style.default
      }`}
    >
      {children}
    </button>
  );
}
